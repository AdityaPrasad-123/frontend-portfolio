import React from 'react'
import sql from '../src/assets/sql.png'
import java from '../src/assets/java.png'
import oracle from '../src/assets/oracle.png'
import Navbar from '../src/assets/Components/Navbar'

const Certificate = () => {
  return (
    <>
    <Navbar/>
       <div className='bg-black h-auto text-white'><br/><br/>
          <h1 className='text-center text-3xl font-medium text-amber-700'>Certificates</h1><br/><br/>

           <div className='mt-1 grid grid-cols-1 sm:grid-cols-2'>
                      
                      <div className='sm:ml-35 '>
                          <img className='w-180 h-100 hover:border-5 hover:border-blue-700 ' src={sql} alt='' />
                      </div>
                      <div className='text-center bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[800px]  w-[30]h-100 sm:ml-10 ml-0 sm:mx-20 '>
                      <h1 className='sm:text-2xl text-xl font-medium py-8'>SQL</h1>
                      <h1 className='sm:text-2xl text-xl'>Duration:1month</h1>
                      <h1 className='text-xl'>Date:April-30-2023</h1>
                      </div>
                      </div>
                      
                      <div  className='mt-3 grid grid-cols-1 sm:grid-cols-2'>
                      <div className='sm:ml-35 '>
                          <img className='w-180 h-100 hover:border-5 hover:border-blue-700 ' src={java} alt='' />
                      </div>
                      <div className='text-center bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[800px]  w-[30]h-100 sm:ml-10 ml-0 sm:mx-20 '>
                      <h1 className='sm:text-2xl text-xl font-medium py-8'>Java</h1>
                      <h1 className='sm:text-2xl text-xl'>Duration:1month</h1>
                      <h1 className='text-xl'>Date:Dec-06-2022</h1>
                      </div>
                      </div>
                     
                
                      <div  className='mt-3 grid grid-cols-1 sm:grid-cols-2'>
                      <div className='sm:ml-35 '>
                          <img className='w-180 h-100 hover:border-5 hover:border-blue-700 ' src={oracle} alt='' />
                      </div>
                      <div className='text-center bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[800px]  w-[30]h-100 sm:ml-10 ml-0 sm:mx-20 '>
                      <h1 className='sm:text-2xl text-xl font-medium py-8'>SQL</h1>
                      <h1 className='sm:text-2xl text-xl'>Duration:1month</h1>
                      <h1 className='text-xl'>Date:Dec-27-2023</h1>
                      </div>
                      </div>
             
      
    </div>
    </>
  )
}

export default Certificate