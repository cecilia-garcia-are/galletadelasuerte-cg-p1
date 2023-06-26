import React from 'react'

const Button = ({rechargePhrase, textColors}) => {
    
  return (
    <button
        style={{color: textColors}}  
        className='buttonRandom'
        onClick={rechargePhrase}>ver fortuna</button>
  )
}

export default Button