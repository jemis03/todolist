import React from 'react'

const Footer = () => {
    let mystyle={
        position:"relative",
        top:"10vh",
        padding:"10px 0px",
    }
  return (
    
    <div className="bg-dark text-light" style={mystyle}>
      <p className="text-center">
        Copyright &copy; All Rights are reserved
      </p>
    </div>
  )
}

export default Footer
