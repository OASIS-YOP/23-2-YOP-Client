import { atom } from 'recoil';

export const myProfileState = atom({
  key: 'myProfile',
  default: {
    userId : '',
	  nickname: '',
	  avatar: '',
	  biography: '',
  },
});
