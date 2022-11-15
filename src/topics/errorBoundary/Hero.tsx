import React from 'react'

function Hero({heroname}:{heroname:string}) {
    if(heroname==='joker'){
        throw new Error('Not a hero!')
    }
  return (
    <div>
        {heroname}
    </div>
  )
}

export default Hero