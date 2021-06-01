import React from 'react'
import ReactDOM from 'react-dom'

function MyPortal() {
    return ReactDOM.createPortal(
        <div>
          <h1>THIS IS REACT PORTAL</h1>  
        </div>,
        document.getElementById('portal-root')
    )
}

export default MyPortal

