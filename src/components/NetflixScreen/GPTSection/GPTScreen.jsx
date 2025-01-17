import React from 'react'
import GPTForm from './GPTForm'
import GPTResult from './GPTResult'

const GPTScreen = () => {
  return (
    <div>
            <div className='fixed -z-10'>
            <img src='src/assets/Netfilx_Body.jpg' alt='body netflix image' className=" w-fit h-screen object-cover md:h-full" ></img>
            </div>
        <div>
            <GPTForm />
            <GPTResult />
        </div>
    </div>
  )
}

export default GPTScreen