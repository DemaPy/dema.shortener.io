import React from 'react'
import { Paragraph } from './Paragraph'
import { Title } from './Title'

export const TextBlock = ({boxStyle, title, titleStyle, paragraph, paragraphStyle}) => {
  return (
    <div className={`${boxStyle}`}>
        <Title style={titleStyle} text={title}/>
        <Paragraph style={paragraphStyle} text={paragraph}/>
    </div>
  )
}
