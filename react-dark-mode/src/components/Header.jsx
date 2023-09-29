import { useState } from "react"
import Nav from "./Nav"

const Header = () => {
  const [clicked, setClicked] = useState(true)
  let buttonText
  clicked ? buttonText = 'Light Mode': buttonText = 'Dark Mode'
  // clicked ? props.setTheme('dark-mode') : props.setTheme('light-mode')
  
  let onClick = () => {
    setClicked(!clicked)
  }
  
  return (
    <header>
      <Nav switch ={onClick}/>
    </header>
  )
}

export default Header

// const [clicked, setClicked] = useState(true)
// let buttonText
// clicked ? buttonText = 'Light Mode': buttonText = 'Dark Mode'
// clicked ? props.setTheme('dark-mode') : props.setTheme('light-mode')

// let onClick = () => {
//   setClicked(!clicked)
// }
