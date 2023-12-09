import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const myProfileState = atom({
  key: 'myProfile',
  default: {
    userId: '',
    nickname: '',
    avatar: '',
    biography: '',
  },
});

const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
