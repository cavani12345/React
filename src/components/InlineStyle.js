import React from 'react'

const styling = {
    color: 'blue',
    fontSize: '30px'
}

function InlineStyle() {
    return (
        <div>
          <h1 style={styling}>Inline styling in React</h1>  
        </div>
    )
}
export default InlineStyle
