import React from 'react'
import './style.css'

const FacebookButton = ({onClick, disabled}) => {
    return <div className="facebook-btn" onClick={onClick} disabled={disabled}>
        <img className="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
        <p className="btn-text">with Facebook</p>
    </div>
}

export default FacebookButton