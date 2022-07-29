import React from 'react'
import { useParams } from 'react-router-dom'

const Colors = (props) => {
    const {color1, color2, word } = useParams();

    const colors = {
        backgroundColor: `${color2}`,
        color: `${color1}`
    }

  return (
    <div>
        <h2 style={colors}>{word}!</h2>
    </div>
  )
}

export default Colors