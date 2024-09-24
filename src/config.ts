import path from 'path'

const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার'] as const

export type Data = Record<(typeof days)[number], SubjectData[]>
export type SubjectData = {
  name: string
  time: string
  room: string
}

export default {
  outPath: path.join(__dirname, '../out/routine.png'),
  templatePath: path.join(__dirname, '../lib/template.html'),
}
