import fs from 'fs'
import React from 'react'
import config, { Data } from './config'
const templateCssContent = fs.readFileSync(config.templateCssPath, 'utf8')

type TemplateProps = {
  routine: Data
  footerText: string
  waterMarkText: string
}

export default function ({
  routine,
  footerText,
  waterMarkText,
}: TemplateProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <style>{templateCssContent}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <main>
          <div className="section-container">
            {Object.entries(routine).map(([day, subjects], i) => {
              return (
                <section key={i}>
                  <h3>{day}</h3>

                  <table>
                    <tbody>
                      <tr>
                        <th>সময়</th>
                        <th>বিষয়</th>
                        <th>রুম</th>
                      </tr>

                      {subjects.map(({ time, name, room }, i) => (
                        <tr key={i}>
                          <td>{time}</td>
                          <td>{name}</td>
                          <td>{room}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              )
            })}
          </div>

          <div className="footer-text">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 245">
                <path d="m56,237 74-228 74,228L10,96h240" />
              </svg>
            </span>

            <span>{footerText}</span>
          </div>

          <div
            className={'watermark'}
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" style="fill:none;"/><text transform="translate(652.53 563.98) scale(.97 1)" style="font-family:FiraCode-Regular, &apos;Fira Code&apos;; font-size:149.21px;"><tspan x="0" y="0">${waterMarkText}</tspan></text></svg>')`,
            }}
          />
        </main>
      </body>
    </html>
  )
}
