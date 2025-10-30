import React from 'react'

const Skill = () => {
  return (
         <div className="flex flex-col gap-6 h-[927px]  ">
                        <div className="flex flex-col gap-2 w-full  h-[294px] mb-9">
                            <div className="text-RParagraph2 font-RMontserrat">Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.</div>
                            <div className="flex flex-col justify-center w-full h-full ">
                                <div className="text-RParagraph1 font-RMontserrat border-b-4 text-center border-RonPrimary w-[80px] ">See More</div>
                            </div>
                        </div>


                        <div className="flex flex-col  h-full">
                            <div className="border-2 h-full border-black rounded-RSkill flex flex-col justify-between px-4 py-24">
                                <div className="flex justify-start items-start ">
                                    <div className=" flex justify-center items-center w-[45px] h-[45px] border-2 rounded-full bg-RonPrimary ">
                                        <img src="/Arrow.svg" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="">01</div>
                                    <div className=" text-RTitle font-RMontserrat">3D Architectural<br />Visualization</div>
                                </div>
                            </div>
                        </div>
                    </div>

  )
}

export default Skill