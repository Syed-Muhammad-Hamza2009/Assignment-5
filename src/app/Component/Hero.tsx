
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div >
      {/* Heading */}
      <h1 className = "w-[496px] h-[189px] absolute top-[316px] left-[176px] font-libre font-[700] text-[40px] leading-[65.8px] tracking-[1px] text-[#000000]">IMPECCABLE CRAFTSMANSHIP AND FINESSE
      </h1>

      {/* paragraph */}
      <p className = " absolute top-[533px] left-[171px] w-[902px] h-[147px] font-libre font-[500] text-[30px] leading-[49.35px] tracking-[0.75px] text-[#787054] pr-[150px]">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>


      {/* image */}
      <Image className = "absolute top-[198px] left-[1164px] overflow-x-hidden"
      src = "/images/jewellary.svg"
      alt = "Jewellary"
      width = {462}
      height = {647}
      />

      {/* button */}
      <div className =" absolute top-[730px] left-[176px] flex justify-center items-center gap-[10px] w-[288px] min-h-[58px] rounded-[10px]  border-[1px] bg-[#A29875]">
        <button className = "min-w-[177px] min-h-[38px] font-libre font-[500] text-[30px] leading-[37.5px] text-[#FFFFFF] p-[10px] box-border text-center">Explore Now</button>
      </div>


    </div>
  )
}
export default Hero
