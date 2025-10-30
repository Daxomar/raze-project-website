import React from 'react'

const IntroSection = () => {
  return (
   <div className="border-y-4 border-black flex flex-col  w-full  h-screen  ">
                 <div className="flex mt-16 mb-10 ">
                    <div className="   flex gap-6 items-center w-[215px] h-[64px] ">
                        <div className=""><img src="/Star.svg" className="" /></div>
                        <div className="text-RTitle font-RMontserrat">Intro</div>

                    </div>
                </div>

                 <div className="flex-1  text-RHeader3 font-RMontserrat flex  justify-center items-center ">
                   <p className=" px-[146px] py-[10px]"><span className="text-RSecondary">My work embodies duality—drive and precision, instinct and intellect.</span> It reflects a craft that is minimal, intentional, and feral in its pursuit of clarity and creation.clarity and creation.</p> 
                 </div>
             </div>
  )
}

export default IntroSection