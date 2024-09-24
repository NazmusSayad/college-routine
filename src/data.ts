import { Data } from './config'
import { as } from './utils'

export default {
  watermark: '4/1/CST',

  routine: as<Data>({
    রবিবার: [
      { name: 'Web Design & Dev', time: '08:00', room: 'SL-1' },
      { name: 'Computer Per. & Int.', time: '10:15', room: '4006' },
      { name: 'Data Stru. & Algo', time: '11:00', room: 'SL-2' },
    ],

    সোমবার: [
      { name: 'Computer Per. & Int.', time: '08:00', room: '4006' },
      { name: 'Digital Elec. 2', time: '08:45', room: '4006' },
      { name: 'Data Stru. & Algo', time: '09:30', room: '4006' },
      { name: 'Env. Studies', time: '10:15', room: '4006' },
      { name: 'Java Programming', time: '11:00', room: 'NET-L' },
    ],

    মঙ্গলবার: [
      { name: 'Computer Per. & Int.', time: '08:00', room: 'MM-L' },
      { name: 'Env. Studies', time: '10:15', room: '4006' },
      { name: 'Data Stru. & Algo', time: '11:00', room: '4006' },
      { name: 'Digital Elec. 2', time: '11:45', room: '4006' },
      { name: 'Business Comm.', time: '12:30', room: '4006' },
    ],

    বুধবার: [
      { name: 'Business Comm.', time: '08:00', room: '4006' },
      { name: 'Java Programming', time: '08:45', room: '4006' },
      { name: 'Web Design & Dev', time: '09:30', room: '4006' },
      { name: 'Computer Per. & Int.', time: '10:15', room: '4006' },
      { name: 'Env. Studies', time: '11:00', room: 'ENVT-L' },
    ],

    বৃহস্পতিবার: [
      { name: 'Digital Elec. 2', time: '08:00', room: 'Digi-L' },
      { name: 'Java Programming', time: '10:15', room: '4006' },
      { name: 'Web Design & Dev', time: '11:00', room: 'SL-1' },
    ],
  }),
}
