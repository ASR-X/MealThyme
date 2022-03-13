import User from './user'
import {
  atom,
  selector,
  useRecoilState,
  DefaultValue,
  useResetRecoilState,
} from 'recoil'

const useratom = atom<User>({
  key: 'user-atom',
  default: {
    age: null as string,
    gender: null as string,
    height: null as string,
    weight: null as string,
    questions: null as string[],
    completed: false,
    allergies: [],

    // age: "12",
    // gender: "1",
    // height: "14",
    // weight: "12",
    // t_rec: "meat"
  },
})

const userstate = selector({
  key: 'user-state',
  get: ({ get }) => get(useratom),
  set: ({ get, set }, newValue) =>
    set(useratom, { ...get(useratom), ...newValue }),
})

export default userstate
