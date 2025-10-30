import React from 'react'
import Skill from './skill'

const ServiceSection = () => {
    return (
        <div className=" pb-16 border-black flex flex-col  w-full ">
            <div className="flex mt-16 mb-10 ">
                <div className="   flex gap-6 items-center w-[215px] h-[64px] ">
                    <div className=""><img src="/Star.svg" className="" /></div>
                    <div className="text-RTitle font-RMontserrat">Services</div>

                </div>
            </div>

            <div className="flex mt-16 mb-16  ">
                <div className="flex gap-6 text-RHeader4 font-RMontserrat items-center  ">
                    I shape the art behind<br /> spaces and brands.
                </div>
            </div>



            <div className=" grid grid-cols-4 gap-6">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>


        </div>
    )
}

export default ServiceSection