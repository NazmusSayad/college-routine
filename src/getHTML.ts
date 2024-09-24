import fs from 'fs'
import config, { Data } from './config'
const templateContent = fs.readFileSync(config.templatePath, 'utf8')

export default function (data: Data, watermark: string) {
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
              ({ time: startTime, name, room }) => `
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

  return templateContent
    .replace('<!--WATERMARK-->', watermark)
    .replace(
      /(<!--CONTENT-START-->)(.|\s)*?(<!--CONTENT-END-->)/,
      sections.join('')
    )
}
