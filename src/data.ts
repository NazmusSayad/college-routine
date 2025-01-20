import { as } from './utils'
import { Data } from './config'

const subjects = {
  $25841: 'Accounting',
  $28551: 'Java Programming',
  $28552: 'Web Design & Dev. II',
  $28553: 'Computer Architecture',
  $28554: 'Data Communication',
  $28555: 'Operating System',
  $28556: 'Project Work-I',
}

export default {
  watermarkText: '5/1/CST',
  footerText: 'সবাই যথা সময়ে উপস্থিত হবেন!',

  routine: as<Data>({
    রবিবার: [
      { name: subjects.$28555, time: '08:00', room: 'SL-1' },
      { name: subjects.$28553, time: '10:15', room: 'SL-1' },
      { name: subjects.$28554, time: '11:00', room: 'NL' },
    ],

    সোমবার: [
      { name: subjects.$28552, time: '08:00', room: 'SL-1' },
      { name: subjects.$28551, time: '10:15', room: 'SL-1' },
      { name: subjects.$28553, time: '11:00', room: 'SL-1' },
    ],

    মঙ্গলবার: [
      { name: subjects.$28556, time: '08:00', room: 'SL-2' },
      { name: subjects.$28554, time: '10:15', room: 'SL-2' },
      { name: subjects.$25841, time: '11:00', room: '4004' },
      { name: subjects.$28553, time: '11:45', room: '4004' },
      { name: subjects.$28555, time: '12:30', room: '4004' },
    ],

    বুধবার: [
      { name: subjects.$28552, time: '08:00', room: 'SL-1' },
      { name: subjects.$28551, time: '10:15', room: '4004' },
      { name: subjects.$25841, time: '11:00', room: '4004' },
      { name: subjects.$28554, time: '11:45', room: '4004' },
    ],

    বৃহস্পতিবার: [
      { name: subjects.$28554, time: '08:00', room: '4004' },
      { name: subjects.$28553, time: '08:45', room: '4004' },
      { name: subjects.$28552, time: '09:30', room: '4004' },
      { name: subjects.$28555, time: '10:15', room: '4004' },
      { name: subjects.$28551, time: '11:00', room: 'SL-2' },
    ],
  }),
}
