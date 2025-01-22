import path from 'path'

const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার'] as const

export type Data = Record<(typeof days)[number], SubjectData[]>
export type SubjectData = {
  name: string
  time: string
  room: string
}

export default {
  imageWidth: 2100,
  outPath: path.join(__dirname, '../out/routine.png'),
  htmlOutPath: path.join(__dirname, '../out/routine.html'),
  templatePath: path.join(__dirname, '../lib/template.html'),
  templateCssPath: path.join(__dirname, '../lib/template.css'),
}
