import React from 'react'
import './style.css'

const Loading = () => {

    return (
        <div className="loading-wrap">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
    )
}

export default Loading