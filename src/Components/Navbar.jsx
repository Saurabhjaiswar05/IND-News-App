import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav  style={{position:"fixed", top:"0", width:"100%", zIndex:"1"}} className="navbar navbar-expand-lg bg-body-tertiary py-3" data-bs-theme="dark">
  <div className="container-fluid">
    <div className="navbar-brand" ><span className='badge bg-light text-dark fs-6' onClick={()=> setCategory("general")} style={{cursor:"pointer"}}>IND News</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{cursor:"pointer", fontWeight:"700 "}}>
        
        <li className="nav-item">
          <div className="nav-link"  onClick={()=> setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("entertainment")}>Entertainment</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
