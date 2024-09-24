import fs from 'fs'
import path from 'path'
import { Data } from './config'
const templatePath = path.join(__dirname, './template.html')
const templateContent = fs.readFileSync(templatePath, 'utf8')

export default function (data: Data) {
  const sections = Object.entries(data).map(([day, subjects]) => {
    if (!subjects) return ''

    return `
    <section>
      <h3>${day}</h3>

      <table>
        <tbody>
          <tr>
            <th>সময়</th>
            <th>বিষয়</th>
            <th>রুম</th>
          </tr>
          ${subjects
            .map(
              ({ startTime, name, room }) => `
                <tr>
                  <td>${startTime}</td>
                  <td>${name}</td>
                  <td>${room}</td>
                </tr>`
            )
            .join('')}
        </tbody>
      </table>
    </section>`
  })

  return templateContent.replace(
    /(<!--START-->)(.|\s)*?(<!--END-->)/,
    sections.join('')
  )
}
