import React, { useState } from 'react'
import useSlideStore from '@/store/useSlideStore'



export const Slide2 = () => {
    const {setSlideNum} = useSlideStore();
    const [location,setLocation] = useState("");

    const handleClick = (location:string) =>{
        setLocation(location);
        setSlideNum(2);

    }



        return (
            <div className="bg-[#01003b] flex flex-row justify-center w-full">
                <div className="bg-[#01003b] w-[1280px] h-[832px] relative">
                    <p className="absolute top-[69px] left-[294px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Let’s get to know you a bit better....
                    </p>
                    <p className="absolute top-[137px] left-[479px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        WHAT DO YOU ENJOY DOING?
                    </p>
                    <img
                        className="absolute w-[167px] h-[171px] top-[182px] left-[542px] object-cover"
                        alt="Ded dba bea"
                        src="d1575ed4-db4a-4bea-a104-c214df483b67-3.png"
                    />
                    <div className="absolute w-[676px] h-[339px] top-[362px] left-[288px] bg-[#d9d9d93d] rounded-[10px]">
                        <div className="absolute w-[242px] top-[24px] left-[28px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff7d] text-[20px] tracking-[0] leading-[normal]">
                            I enjoy...
                        </div>
                    </div>
                </div>
            </div>
        );
    };