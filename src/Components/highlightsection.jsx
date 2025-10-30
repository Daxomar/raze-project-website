import React from 'react'

const HighLightSection = () => {
  return (
                <div className="flex flex-col  w-full  h-screen  ">
                <div className="flex mt-16 mb-6">
                    <div className="   flex gap-6 items-center w-[215px] h-[64px] ">
                        <div className=""><img src="/Star.svg" className="" /></div>
                        <div className="text-RTitle font-RMontserrat">Highlight</div>

                    </div>
                </div>
                <div className="flex justify-center items-center w-full k h-[592px] bg-RonPrimary">
                    <div className=" flex relative justify-center items-center border-2  w-[120px] h-[120px] bg-white rounded-full ">
                        <img src="/Play.svg" className='absolute right-[28px] w-[50px] h-[50px]' />
                    </div>
                </div>

                 <div className='my-20 flex flex-col md:flex-row items-center justify-between opacity-50  px-20 py-50 lg:h-[191px]  '>
                <div><img src="/Google.svg" /></div>
                <div><img src="/Shopify.svg" /></div>
                <div><img src="/Netflix.svg" /></div>
                <div><img src="/Figma.svg" /></div>
                <div className='text-RHeader3'>Chuks</div>
            </div>
            </div>
  )
}

export default HighLightSection