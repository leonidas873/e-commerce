import React from 'react'
import './style.css'

const GoogleButton = ({onClick, disabled}) => {
    return <div className="google-btn" onClick={onClick} disabled={disabled}>
        <div className="google-icon-wrapper">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p className="btn-text">with google</p>
    </div>
}

export default GoogleButton