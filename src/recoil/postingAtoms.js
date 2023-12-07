import { atom, selector } from 'recoil';

export const stepIndexState = atom({
  key: 'stepIndexState',
  default: 1,
});

export const selectedArtistState = atom({
  key: 'selectedArtistState',
  default: '뉴진스',
});

export const selectedCollectionState = atom({
  key: 'selectedCollectionState',
  default: '',
});

export const isCollectionClickedState = atom({
  key: 'isCollectionClickedState',
  default: false,
});

export const selectedDesignState = atom({
  key: 'selectedDesignState',
  default: '',
});

export const isDesignClickedState = atom({
  key: 'isDesignClickedState',
  default: false,
});