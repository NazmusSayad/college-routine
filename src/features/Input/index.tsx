'use client'

import { useEffect, useState } from 'react'
import DayFrom from './DayFrom'
import css from './index.module.scss'
import AddSubjectForm from './AddSubjectForm'
import { Button } from '@/src/components/Button'
import { Data, SubjectData, days } from '@/src/config'
import { download } from '@/src/utils/utils'

const index = () => {
  const [imgUrl, setImgUrl] = useState('')
  const [modalName, setModalName] = useState('')
  const [data, setData] = useState<Partial<Data>>(() => {
    const local = globalThis.localStorage?.getItem('data')
    return local ? JSON.parse(local) : {}
  })

  useEffect(() => {
    globalThis.localStorage?.setItem('data', JSON.stringify(data))
  }, [data])

  function importData(file: File) {
    const reader = new FileReader()
    reader.onload = function (e: any) {
      const content = e.target.result
      const jsonData = JSON.parse(content)
      setData(jsonData)
    }
    reader.readAsText(file)
  }

  function exportData() {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(localStorage.getItem('data')!)
    download(dataStr, 'data.json')
  }

  function addSubject(name: string, data: any) {
    setData((prev) => {
      const list = [
        ...(prev[name as keyof typeof prev] || []),
        data,
      ] as SubjectData[]

      function customSort(timeStr: string) {
        const [hours, minutes] = timeStr.split(':').map(Number)
        return hours * 60 + minutes
      }

      const sortedList = list.sort(
        (a, b) => customSort(a.startTime) - customSort(b.startTime)
      )

      return { ...prev, [name]: sortedList }
    })
  }

  function deleteSubject(day: (typeof days)[number], index: number) {
    const list = data[day]?.filter((_, ind) => ind !== index)
    setData((prev) => ({ ...prev, [day]: list }))
  }

  async function setPicture(data: Partial<Data>) {
    const img = await getPicture(data)
    setImgUrl(img || '')
  }

  async function downloadPicture() {
    const img = imgUrl || (await getPicture(data))
    if (!img) return
    setImgUrl(img || '')
    download(img, 'routine.jpg')
  }

  async function getPicture(data: Partial<Data>) {
    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' },
    })

    if (!res.ok) return null
    return res.text()
  }

  return (
    <div>
      <div className={css.listContainer}>
        {days.map((day) => (
          <DayFrom
            key={day}
            name={day}
            setModal={setModalName}
            subjects={data[day] || []}
            deleteSubject={deleteSubject}
            addSubject={addSubject}
            getPicture={() =>
              data[day]?.length && setPicture({ [day]: data[day] })
            }
          />
        ))}
      </div>

      <div className={css.buttons}>
        <Button onClick={() => setPicture(data)}>Show Preview</Button>
        <Button onClick={async () => downloadPicture()}>Download</Button>
      </div>
      <div className={css.buttons}>
        <Button
          onClick={(e) =>
            (e.currentTarget as HTMLElement).querySelector('input')!.click()
          }
        >
          <input
            hidden
            type="file"
            onChange={(e) =>
              e.target.files &&
              e.target.files[0] &&
              importData(e.target.files[0])
            }
          />
          Import
        </Button>
        <Button onClick={() => exportData()}>Export</Button>
      </div>

      {imgUrl && (
        <div className={css.preview}>
          <h2>Preview:</h2>
          <img src={imgUrl} alt="preview" />
        </div>
      )}

      {modalName && (
        <AddSubjectForm
          name={modalName}
          close={() => setModalName('')}
          addSubject={addSubject}
        />
      )}
    </div>
  )
}

export default index
