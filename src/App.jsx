
import './App.css'
import Button from './components/Button'
import PhrasesCard  from './components/PhrasesCard'
import phrases from './data/phrases.json'
import { useState } from "react"


function App() {
 

  const [ randomPhrase, setRandomPhrase ] = useState(0)

  const colors = [ "#cfaff9" , "#ffcafd", "#8facff", "#2a7a4a", "#2a7a4a",  
  "#f9d395", "#f7b094", "#f7c954", "#f47f56", "#abcdd9", "#cca881", "#f6adcb", 
  "#9276b7", "#64abff", "#4dad15" ]

  const background = ['/img/fondo1.jpg', '/img/fondo2.jpg', '/img/fondo3.jpg',
   '/img/fondo4.jpg', '/img/fondo5.jpg', '/img/fondo6.jpg', '/img/fondo7.jpg'
   , '/img/fondo8.jpg', '/img/fondo9.jpg', '/img/fondo10.jpg', '/img/fondo11.jpg'
   , '/img/fondo12.jpg', '/img/fondo13.jpg', '/img/fondo14.jpg', '/img/fondo15.jpg']


  const rechargePhrase = () => {
    setRandomPhrase(Math.floor(Math.random() * ((phrases.length -1) + 1)))

}

  
  document.body.style = `background: url(${background[randomPhrase]}) 
  no-repeat center center fixed; 
  display: grid;
  background-size: cover;
  text-aling: center`

  return (
    <>

      <PhrasesCard
      data = { phrases[ randomPhrase ] }
      textColor = {colors [ randomPhrase ]} 
      />

      <Button
      rechargePhrase={rechargePhrase}
      textColors={colors[ randomPhrase]}

      />





    </>
  )
}

export default App
