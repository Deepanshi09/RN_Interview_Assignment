import {Dimensions, PixelRatio, Platform} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');
// const scale = SCREEN_HEIGHT / 812;
const scale = SCREEN_WIDTH / 375;

const normalizeFont = size => {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
    }
};


const widthFromPixel = (widthPx, w = 375) => {
    const newSize = widthPx * (SCREEN_WIDTH / w);
    return newSize;
};

const heightFromPixel = (heightPx, h = 812) => {
    const newSize = heightPx * (SCREEN_HEIGHT / h);
    return newSize;
};


export const fontSizes = {
  f22: 22,
  f20: 20,
  f18: 18,
  f16: 16,
  f14: 14,
  f12: 12,
  f10: 10,
  f8: 8,
  f23: 23,
  f21: 21,
  f19: 19,
  f17: 17,
  f15: 15,
  f13: 13,
  f11: 11,
  f9: 9,

};

export {
    widthFromPixel as wpx,
    heightFromPixel as hpx,
    normalizeFont as nf,
};

