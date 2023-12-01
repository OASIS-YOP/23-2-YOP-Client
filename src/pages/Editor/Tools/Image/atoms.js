
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

export const reverseXToggle = atom({
  key: 'reverseXToggle',
  default: true,
});

export const reverseYToggle = atom({
  key: 'reverseYToggle',
  default: true,
});

export const scaleValue = atom({
  key: 'scaleValue',
  default: 50,
});

export const applyGray = atom({
  key: 'applyGray',
  default: false,
});

export const refreshImage = atom({
  key: 'refreshImage',
  default: false,
});

export const newWidth = atom({
  key: 'newWidth',
  default: 0,
});

export const newHeight = atom({
  key: 'newHeight',
  default: 0,
});






