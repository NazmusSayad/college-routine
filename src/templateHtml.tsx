import React from 'react'
import data from './data'
import Template from './Template'
import { renderToStaticMarkup } from 'react-dom/server'

export default function () {
  const htmlDocType = '<!DOCTYPE html>'

  return (
    htmlDocType +
    renderToStaticMarkup(
      <Template
        routine={data.routine}
        footerText={data.footerText}
        waterMarkText={data.watermarkText}
      />
    )
  )
}
