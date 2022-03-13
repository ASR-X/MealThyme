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

    // age: "18",
    // gender: "Male",
    // height: "5'7",
    // questions: [
    //   "1",
    //   "0",
    //   "1",
    //   "1",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    //   "0",
    // ],
    // weight: "120",
    // completed: true,
    // allergies: []
  },
})

const userstate = selector({
  key: 'user-state',
  get: ({ get }) => get(useratom),
  set: ({ get, set }, newValue) =>
    set(useratom, { ...get(useratom), ...newValue }),
})

export default userstate
