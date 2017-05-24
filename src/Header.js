import React from 'react'
import Plus from './Plus'


import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>ThingList</h1>
      <h2>So Many Things</h2>
      <form>
    <label>
      Name:
     <input type="text" name="name" />
     </label>
     <button className="Add">
            <i className="fa fa-plus"></i>
          </button>

</form>

      
    </header>
  )
}

export default Header
