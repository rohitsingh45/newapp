import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  // use state variables for help to switch dark mode using buttons...
  const [myStyle, setStyle] = useState({});
  const [btnValue, setBtnVal] = useState("Enable dark mode");

  // Function to switch into dark mode using the buttons and event calling...
  const switchDark = () => {
    if (myStyle.color === 'white') {
      let styleVal = {
        color: "black",
        backgroundColor: 'white'
      }
      setBtnVal("Enable dark mode")
      setStyle(styleVal)
      document.body.style.backgroundColor = 'white'
    }
    else {
      let styleValue = {
        color: "white",
        backgroundColor: "black"
      }
      setBtnVal("Enable light mode")
      setStyle(styleValue);

      document.body.style.backgroundColor = 'black'
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode  /*Managing text color */} bg-${ props.mode  /*Managing background color */}`}>
      <div className="container-fluid" style={myStyle}>
        <a className="navbar-brand" href="/" style={myStyle} >{props.navHead}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" style={myStyle} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={myStyle} >About</a>
            </li>
            <li className="nav-item">
              {/* <button className="btn btn-primary mx-4" onClick={switchDark} >{btnValue}</button> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className={`btn btn-success`} type="submit">Search</button>
          </form> */}

          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  navHead: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  navHead: 'default'
}
