import React, { useState } from 'react'
import useSlideStore from '@/store/useSlideStore'



export const Slide1 = () => {
  const {setSlideNum} = useSlideStore();
  const [location,setLocation] = useState("");

  const handleClick = (location:string) =>{
    setLocation(location);
    setSlideNum(2);
    
  }

  return (
    <div className="bg-[#01003b] flex flex-row justify-center w-full">
      <div className="bg-[#01003b] w-[1280px] h-[832px] relative">
        <p className="absolute top-[149px] left-[317px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Let’s get to know you a bit better....
        </p>
        <div className="absolute top-[223px] left-[517px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          WHERE ARE YOU LOCATED
        </div>
        <button onClick={() => handleClick("Urban")}  className="top-[452px] absolute w-[576px] h-[70px] left-[352px] bg-[#d9d9d93d] rounded-[10px]">
          <div className="absolute w-[118px] top-[24px] left-[238px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] tracking-[4.00px] leading-[normal]">
            URBAN
          </div>
        </button>
        <button  onClick={() => handleClick("Rural")} className="top-[656px] absolute w-[576px] h-[70px] left-[352px] bg-[#d9d9d93d] rounded-[10px]">
          <div className="absolute w-[158px] top-[22px] left-[220px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] tracking-[4.00px] leading-[normal]">
            RURAL
          </div>
        </button>
        <button  onClick={() => handleClick("Suburban")} className="top-[554px] absolute w-[576px] h-[70px] left-[352px] bg-[#d9d9d93d] rounded-[10px]">
          <div className="absolute w-[158px] top-[22px] left-[218px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] tracking-[4.00px] leading-[normal]">
            SUBURBAN
          </div>
        </button>
      </div>
    </div>
  );
};