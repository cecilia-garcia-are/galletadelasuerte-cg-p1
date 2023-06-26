
import './App.css'
import Button from './components/Button'
import PhrasesCard  from './components/PhrasesCard'
import phrases from './data/phrases.json'
import { useState } from "react"

function App() {
 

  const [ randomPhrase, setRandomPhrase ] = useState(0)

  const colors = [ "#cfaff9" , "#ffcafd", "#8facff", "#c2f9d9", "#e6ff52",  
  "#f9d395", "#f7b094", "#f7c954", "#f47f56", "#abcdd9", "#cca881", "#f6adcb", 
  "#9276b7", "#64abff", "#bbff97" ]

  const background = ['/public/fondo1.jpg', '/public/fondo2.jpg', '/public/fondo3.jpg',
   '/public/fondo4.jpg', '/public/fondo5.jpg', '/public/fondo6.jpg', '/public/fondo7.jpg'
   , '/public/fondo8.jpg', '/public/fondo9.jpg', '/public/fondo10.jpg', '/public/fondo11.jpg'
   , '/public/fondo12.jpg', '/public/fondo13.jpg', '/public/fondo14.jpg', '/public/fondo15.jpg']


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
