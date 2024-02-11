import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeComponent() {
    window.addEventListener('resize', () => {
        if(window.matchMedia('(max-width: 500px)').matches){
            document.getElementById('zero').innerText = "0";
            document.getElementById('one').innerText = "1";
            document.getElementById('two').innerText = "2";
            document.getElementById('three').innerText = "3";
            document.getElementById('four').innerText = "4";
            document.getElementById('five').innerText = "5";
            document.getElementById('six').innerText = "6";
            document.getElementById('seven').innerText = "7";
            document.getElementById('eight').innerText = "8";
            document.getElementById('nine').innerText = "9";
        }else{
            document.getElementById('zero').innerText = "LEVEL 0";
            document.getElementById('one').innerText = "LEVEL 1";
            document.getElementById('two').innerText = "LEVEL 2";
            document.getElementById('three').innerText = "LEVEL 3";
            document.getElementById('four').innerText = "LEVEL 4";
            document.getElementById('five').innerText = "LEVEL 5";
            document.getElementById('six').innerText = "LEVEL 6";
            document.getElementById('seven').innerText = "LEVEL 7";
            document.getElementById('eight').innerText = "LEVEL 8";
            document.getElementById('nine').innerText = "LEVEL 9";
        }
    })

  return (
    <div className='bg-[#63907D] w-screen h-screen'>
      <div className='font-text text-neutral-100 text-center pt-20'>
        <p className='text-3xl'>WELCOME TO</p>
        <p className='text-7xl sm:text-9xl pt-2'>ALL FOR ONE</p>
      </div>
      <p className='text-neutral-100 text-center mt-16 pb-0 sm:pb-4'>
        SELECT A LEVEL
      </p>
      
      <div className='font-text text-[#D9CAB3] bg-transparent sm:bg-[#f6f6f6] w-5/6 h-96  grid grid-flow-col grid-rows-4 sm:grid-rows-4 rounded-lg mx-auto py-4 text-3xl lg:text-4xl mb-12'>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto'>
        <Link id='zero' to={'levelZero'}>LEVEL 0</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='one' to={'levelOne'}>LEVEL 1</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='two' to={'levelTwo'}>LEVEL 2</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='three' to={'levelThree'}>LEVEL 3</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='four' to={'levelFour'}>LEVEL 4</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='five' to={'levelFive'}>LEVEL 5</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='six' to={'levelSix'}>LEVEL 6</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='seven' to={'levelSeven'}>LEVEL 7</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='eight' to={'levelEight'}>LEVEL 8</Link>
        </div>
        <div className='bg-[#212121] w-7/12 sm:w-3/4 h-16 rounded-md text-center m-auto items-center'>
        <Link id='nine' to={'levelNine'}>LEVEL 9</Link>
        </div>
        </div>
      </div>
  )
}
