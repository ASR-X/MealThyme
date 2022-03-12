import { atom } from 'recoil'
import WeekPlan from './weekplan'
import User from './user'

const weekplanstate = atom<WeekPlan>({
    key: 'weekplan-state',
    default: {
        startDate: new Date(),
        endDate: new Date(),
        meals: [],
        recipes: [],
    } as WeekPlan
}) 

export default weekplanstate

const initialState = {
  // user: {
  //   admin: '1',
  //   age: '34',
  //   dose: ['2019-07-27', '2020-07-29', '2021-04-03', '2020-08-01'],
  //   drugs: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '11', '12', '13'],
  //   education: '5',
  //   employment: '2',
  //   firstAge: '25',
  //   gender: '1',
  //   insurance: '4',
  //   marital: '4',
  //   Home: true,
  // },
  user: {
    admin: null as any,
    age: null as any,
    dose: [],
    drugs: [],
    education: null as any,
    employment: null as any,
    firstAge: null as any,
    gender: null as any,
    insurance: null as any,
    marital: null as any,
    Home: null as any,
  },
  error: null as any,
}