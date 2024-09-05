import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <>
    <nav>
    <Link to = {"/"}><h1>BinThree</h1></Link>
      <main>
        <Link to = {"/"}>Home</Link>
        <Link to = {"/"}>Contact</Link>
        <Link to = {"/"}>About</Link>
        <Link to = {"/"}>Brands</Link>
        <Link to = {"/"}>Services</Link>
      </main>
    </nav>
    </>
  )
}

export default Headers
