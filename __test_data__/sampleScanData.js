const sampleMockScanData = [{
  polygon: null,
  image: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAA5klEQVRIx2M4xi1HI8QwajT9jP5/hFYIp8Tn3QyTitkmFLEBGdQ0+vhMFn9jrigLtnAz9iATLiCXOkZn+zGHuzKH2bDoqzCbaTMHW7Nk+DPlBTJRweiZdZLVqWLJqlyJapzJIaGxPr7t+bJtORJUMHpyvEKevaSbtpCDqqibseW+Wavq/OUbA6WoYPTUFJU0J6lYTT5HDdkYR+WJ2Tx1Yar1QfJUMHpeo3p9lmKKBUeaJcf+Kez7+tln1Wl05itRweikCOnoQOnuBKl0f736RKMdzXKxoTIxobJUS9dUyDKjxdNwMBoAc/z3YAcWdMQAAAAASUVORK5CYII=',
  originalImage: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAA5klEQVRIx2M4xi1HI8QwajT9jP5/hFYIp8Tn3QyTitkmFLEBGdQ0+vhMFn9jrigLtnAz9iATLiCXOkZn+zGHuzKH2bDoqzCbaTMHW7Nk+DPlBTJRweiZdZLVqWLJqlyJapzJIaGxPr7t+bJtORJUMHpyvEKevaSbtpCDqqibseW+Wavq/OUbA6WoYPTUFJU0J6lYTT5HDdkYR+WJ2Tx1Yar1QfJUMHpeo3p9lmKKBUeaJcf+Kez7+tln1Wl05itRweikCOnoQOnuBKl0f736RKMdzXKxoTIxobJUS9dUyDKjxdNwMBoAc/z3YAcWdMQAAAAASUVORK5CYII=',
}, {
  polygon: null,
  image: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAM0lEQVRIx2NYJ6NBI8QwavSwMPpUVhGNEMN/moFRo4eH0bmtm2mEGBTdummERo0eFkYDAPSe0SzkjI/wAAAAAElFTkSuQmCC',
  originalImage: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAM0lEQVRIx2NYJ6NBI8QwavSwMPpUVhGNEMN/moFRo4eH0bmtm2mEGBTdummERo0eFkYDAPSe0SzkjI/wAAAAAElFTkSuQmCC',
}, {
  polygon: null,
  image: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUBAMAAABohZD3AAAAMFBMVEUAAJkCApoFBZslJagrK6oyMq01Na5iYsB8fMt9fcuCgs2SktSiotnFxej/AAD////6TaSrAAAANklEQVQY02NggAC+dxAAZDIxM6HwWWpKUPhZe3clIPEZI///CMTDR1ePYR66fajueYcKBhsfAEef2NE7PmJjAAAAAElFTkSuQmCC',
  originalImage: 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUBAMAAABohZD3AAAAMFBMVEUAAJkCApoFBZslJagrK6oyMq01Na5iYsB8fMt9fcuCgs2SktSiotnFxej/AAD////6TaSrAAAANklEQVQY02NggAC+dxAAZDIxM6HwWWpKUPhZe3clIPEZI///CMTDR1ePYR66fajueYcKBhsfAEef2NE7PmJjAAAAAElFTkSuQmCC',
}, {
  polygon: null,
  image: 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAUCAIAAABu7dhfAAAB+0lEQVR42sWWSS8DYRjHX7vYHewRRIilq9bFVAQNYokixBo73bRTqlVtUbGXiERiJ5QKRQ8+gIOTgzg4ODn5IPxrnCRO04zJ/zC/yeR9nt/7zExLQvlacfMiyVOKFAsRIl0ITyNpWQby6ucjxfrgQrX0GwvqHLHFhoM46iFCxDIkIF/VrNtLokw1Q1vxxYaEEmPT2G5KqVnev5lMmXGdQVmXM7Vs6l67+m7bYhkCg2gJrZxzx0gN+XVztSPbwNHZC2CW3Nao2WEQirjz5e3jk/VBwoVj+qXrMIF20OqCEwroFq9wsdt0nFlpjSrS00vXwFZ6Hw0dp8kfk2Us47PEwIxrt6F8jVCxgKWBE6s3aCKnegaFGQwXaHGnt9PyNmxnGZ8lveLBRIft57BEJWgFFqj6LKcZFdPoY3zlBtg+fghL/2wsekemNrxYF5YdE0dA8/pdUKEalijMIFxx4hK0PgkVLOOzNDnvsJzacQlLvDOTzlvgkM2FWaIS6gF7TCd4TzwNutc2mmV+LFEVlryG+U7jEYOwzK6y/7L0z8ZieIZlD1ZUOdyJ1CSk8bAAB6xn6eUWzJJBtJJbM+umep/LeliG8AWj4iI1jz8iFCkRnEikmr/QK/NHyU/OD4J5chyCp5bj/MfG4gvEcQi+sxznPzYWv5kch+CfAcf5Ap97Cqiq6b86AAAAAElFTkSuQmCC',
  originalImage: 'iVBORw0KGgoAAAANSUhEUgAAACYAAAAUCAIAAABu7dhfAAAB+0lEQVR42sWWSS8DYRjHX7vYHewRRIilq9bFVAQNYokixBo73bRTqlVtUbGXiERiJ5QKRQ8+gIOTgzg4ODn5IPxrnCRO04zJ/zC/yeR9nt/7zExLQvlacfMiyVOKFAsRIl0ITyNpWQby6ucjxfrgQrX0GwvqHLHFhoM46iFCxDIkIF/VrNtLokw1Q1vxxYaEEmPT2G5KqVnev5lMmXGdQVmXM7Vs6l67+m7bYhkCg2gJrZxzx0gN+XVztSPbwNHZC2CW3Nao2WEQirjz5e3jk/VBwoVj+qXrMIF20OqCEwroFq9wsdt0nFlpjSrS00vXwFZ6Hw0dp8kfk2Us47PEwIxrt6F8jVCxgKWBE6s3aCKnegaFGQwXaHGnt9PyNmxnGZ8lveLBRIft57BEJWgFFqj6LKcZFdPoY3zlBtg+fghL/2wsekemNrxYF5YdE0dA8/pdUKEalijMIFxx4hK0PgkVLOOzNDnvsJzacQlLvDOTzlvgkM2FWaIS6gF7TCd4TzwNutc2mmV+LFEVlryG+U7jEYOwzK6y/7L0z8ZieIZlD1ZUOdyJ1CSk8bAAB6xn6eUWzJJBtJJbM+umep/LeliG8AWj4iI1jz8iFCkRnEikmr/QK/NHyU/OD4J5chyCp5bj/MfG4gvEcQi+sxznPzYWv5kch+CfAcf5Ap97Cqiq6b86AAAAAElFTkSuQmCC',
}];

export default sampleMockScanData;
