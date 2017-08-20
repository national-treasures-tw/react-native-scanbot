import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  StatusBar,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Status from '../utils/consts';
import Scanbot from '../Scanbot/Scanbot';

export const winSize = Dimensions.get('window');

class ReviewBottomTapbar extends PureComponent {

  onCropButton = async () => {
    const { document, cropDocument } = this.props;

    try {
      StatusBar.setHidden(true, true);
      const croppedDocument = await Scanbot.crop(document);
      StatusBar.setHidden(false, true);

      if (document.image === croppedDocument.image) {
        // user canceled the crop
        return;
      }

      cropDocument(
        document.id,
        croppedDocument.image,
        croppedDocument.polygon
      );

    } catch (ex) {
      alert('Crop failed..', ex);
    }
  };

  onRotateButton = async () => {
    const { document, rotateDocument } = this.props;

    try {
      // See 'Scanbot/Scanbot.js' for all options and documentation
      rotateDocument(
        document.id,
        await Scanbot.rotate(document.image),
      );
    } catch (ex) {
      alert('Rotating failed..', ex);
    }
  };

  onDeleteButton = () => {
    const { document, deleteDocument } = this.props;
    deleteDocument(document.id);
  };

  onStatusChange = (status) => {
    const { user, uploadPendingDocuments, goHome } = this.props;
    uploadPendingDocuments();

    fetch('https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/dispatch', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.details.info.userId,
        dispatchId: user.record ? user.record.dispatchId : 'doc-id-for-UN',
        status
      })
    })
    .then((res) => {
      // console.log(res);
      console.log(`status is ${status}`);

      goHome();
    })
  }

  render(){
    const { document, uploadDocument, documentCount } = this.props;

    if (documentCount === 0) {
      return <View style={{ height: 60 }}/>;
    }

    switch (document.status) {
      case Status.UNDEFINED:

        if (!document.id && document.id !== 0) {
          // stats page
          return (
            <View style={styles.bottomTabBar}>
              <Button
                style={styles.button}
                onPress={() => this.onStatusChange('complete')}
                title="Complete"
              />
              <Button
                style={styles.button}
                onPress={() => this.onStatusChange('incomplete')}
                title="Incomplete"
              />
            </View>
          )
        } else {
          return (
            <View style={styles.bottomTabBar}>
              <Button
                disabled={!document.originalImage || document.isNotDocument}
                style={styles.button}
                onPress={() => this.onCropButton()}
                title="Crop"
              />
              <Button
                style={styles.button}
                onPress={() => this.onRotateButton()}
                title="Rotate"
              />
              <Button
                style={styles.button}
                onPress={this.onDeleteButton}
                title="🗑"
              />
            </View>
          );
        }

      case Status.LOADING:

        return <DisabledButton title="Uploading"/>;

      case Status.LOADED:

        return <DisabledButton title="Document uploaded"/>;

      case Status.ERROR:

        return (
          <View style={styles.bottomTabBar}>
            <Button
              style={styles.button}
              onPress={uploadDocument(document.id)}
              title="Upload failed.. Try again?"
            />
            <Button
              style={styles.button}
              onPress={this.onDeleteButton}
              title="🗑"
            />
          </View>
        );
    }

    return null;
  }
};

const DisabledButton = ({ title }) => (
  <View style={styles.bottomTabBar}>
    <Button
      style={styles.button}
      onPress={() => {}}
      title={title}
      disabled
    />
  </View>
);

ReviewBottomTapbar.propTypes = {
  document: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired
    }).isRequired,
    PropTypes.object.isRequired,
  ]).isRequired,
  cropDocument: PropTypes.func.isRequired,
  rotateDocument: PropTypes.func.isRequired,
  deleteDocument: PropTypes.func.isRequired,
  uploadDocument: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    width: winSize.width,
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-around',
    padding: 8,
    height: 60,
  },
  button: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    height: 60,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(props => props, mapDispatchToProps)(ReviewBottomTapbar);
