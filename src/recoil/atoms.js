 
import { atom, selector } from 'recoil';

export const brightnessValue = atom({
  key: 'brightnessValue',
  default: 0,
});

export const contrastValue = atom({
  key: 'contrastValue',
  default: 0,
});

export const saturationValue = atom({
  key: 'saturationValue',
  default: 0,
});

export const rotationValue = atom({
  key: 'rotationValue',
  default: 0,
});

export const reverseXState = atom({
  key: 'reverseXToggle',
  default: true,
});

export const reverseYState = atom({
  key: 'reverseYToggle',
  default: true,
});

export const scaleValue = atom({
  key: 'scaleValue',
  default: 50,
});

export const applyGrayState = atom({
  key: 'applyGray',
  default: false,
});

export const isBackImgEmptyState = atom({
  key: 'isBackImgEmpty',
  default: true,
});

export const refreshImageState = atom({
  key: 'refreshImage',
  default: false,
});

export const resizeWidth = atom({
  key: 'resizeWidth',
  default: 0,
});

export const resizeHeight = atom({
  key: 'resizeHeight',
  default: 0,
});

