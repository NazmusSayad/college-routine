const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার'] as const

export type Data = Record<(typeof days)[number], SubjectData[]>
export type SubjectData = {
  name: string
  startTime: string
  room: string
}
