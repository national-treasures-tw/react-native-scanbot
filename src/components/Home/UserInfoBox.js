import React from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import homeStyles from './styles/HomeStyle';
import { Images, Metrics } from '../Themes';
import { levelWidthCalculator, levelLabelCalculator } from '../../utils/levelHelper';
const width = Metrics.screenWidth;

export default class UserInfoBox extends React.Component {
  render() {
    const { details } = this.props;
    const levelTotalWidth = 144;
    const levelWidth = details && levelWidthCalculator(details.info.totalScore, levelTotalWidth)
    const barStyle = StyleSheet.create({
      bar1: {
        height: 8,
        width: details ? levelWidth : 0,
        backgroundColor: 'rgb(245, 166, 35)',
        borderWidth: 1,
        borderColor: 'rgb(69, 64, 62)',
        borderRightWidth: 0
      },
      bar2: {
        height: 8,
        width: details ? levelTotalWidth - levelWidth : levelTotalWidth,
        backgroundColor: 'rgb(136, 118, 102)',
        borderWidth: 1,
        borderColor: 'rgb(69, 64, 62)',
        borderLeftWidth: 0
      }
    });

    return (
      <View style={[homeStyles.topSection, { width }]}>
        <Image source={Images.badge1} style={homeStyles.badge1} />
        <View style={homeStyles.topBox}>
          <View style={homeStyles.nameBox}>
            { details ? <Text style={homeStyles.nameBoxText}> {details.info.nickname}</Text> : <ActivityIndicator size="large" animating /> }
          </View>
          {/* Levels: 1 (< 500), 2 (500 - 5000), 3 (> 5000) */}
          <View style={homeStyles.nameBox}>
            <Text style={homeStyles.levelBoxText}>Level. {details && levelLabelCalculator(details.info.totalScore)}</Text>
            <View style={homeStyles.levelBar}>
              <View style={barStyle.bar1}></View>
              <View style={barStyle.bar2}></View>
            </View>
          </View>
          <View style={homeStyles.headingSub}>
            <Text style={homeStyles.headingSubText}>本季排名：{details && details.ranking.length + 1}</Text>
          </View>
          <View style={homeStyles.headingSub}>
            <Text style={homeStyles.headingSubText}>貢獻寶藏總數：{details && details.info.totalScore}</Text>
          </View>
          <View style={homeStyles.headingSub}>
            <Text style={homeStyles.headingSubText}>國家寶藏總數：{details && details.totalCount}</Text>
          </View>
        </View>
      </View>
    );
  }
}