import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

  // use state variables for help to switch dark mode using buttons...
  // Function to switch into dark mode using the buttons and event calling...

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode  /*Managing text color */} bg-${props.mode  /*Managing background color */}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="" >{props.navHead}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active"  aria-current="page" href="">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">About</a>
            </li>
            <li className="nav-item">
              {/* <button className="btn btn-primary mx-4" onClick={switchDark} >{btnValue}</button> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className={`btn btn-success`} type="submit">Search</button>
          </form> */}
          <div className='container mx-5' style={{width:"200px"}}>
            <select className={`form-select 
             bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}
              id='select' aria-label="Default select example" defaultValue="0">
              <option value="0">Select the dark options</option>
              <option value="1">Black-Grey</option>
              <option value="2">Pink-Yellow</option>
              <option value="3">Black-Green</option>
              <option value="4">Red-Black</option>
            </select>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
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
