'use client'

import { invoke } from '@tauri-apps/api/tauri'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react';
import ChooseApp from '../components/ChooseApp';
import { appWindow } from '@tauri-apps/api/window';
import { getExeName } from '@/actions/binaryName';
import usePathStore from '@/store/usePathStore';

export default function Home() {
  console.log(invoke("get_process_names"));

  const [application, setApplication] = useState("");
  const {path} = usePathStore();

  const handleData = (dataFromChild:string) => {
    setApplication(dataFromChild);
  }

  console.log(getExeName(path));
  async function checkProcessAndShowWindow() {
    const processNames = await invoke("get_process_names");
    
    if (processNames.includes(getExeName(path))) {
      useEffect(() => {
        invoke('show_window');
      },[path])
    }
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('This will run every second!');
      checkProcessAndShowWindow();
    }, 1000); // 1000 milliseconds = 1 second

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleArea = () => {


  }


return (
  <div className="bg-[#01003b] flex flex-row justify-center w-full">
    <div className="bg-[#01003b] w-[1280px] h-[832px] relative">
      <p className="absolute top-[56px] left-[284px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        Let’s get to know you a bit better....
      </p>
      <div className="absolute w-[430px] h-[316px] top-[149px] left-[56px]">
        <div className="absolute w-[266px] top-0 left-[79px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          WHERE YOU’RE LOCATED
        </div>
        <button className="absolute w-[422px] h-[67px] top-[52px] left-0 bg-[#d9d9d93d] rounded-[10px]">
        <div className="absolute w-[87px] top-[24px] left-[167px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] tracking-[4.00px] leading-[normal]">
          URBAN
        </div>
      </button>
      <button className="absolute w-[422px] h-[67px] top-[249px] left-0 bg-[#d9d9d93d] rounded-[10px]">
        <div className="absolute w-[84px] top-[23px] left-[170px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] tracking-[4.00px] leading-[normal]">
          RURAL
        </div>
      </button>
      <button className="absolute w-[422px] h-[68px] top-[150px] left-0 bg-[#d9d9d93d] rounded-[10px]">
        <div className="absolute w-[161px] top-[23px] left-[147px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] tracking-[4.00px] leading-[normal]">
          SUBURBAN
        </div>
      </button>
      </div>
      <p className="absolute w-[305px] top-[141px] left-[742px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        WHAT DO YOU ENJOY DOING?
      </p>
      <div className="absolute w-[693px] h-[438px] top-[201px] left-[548px] bg-[#d9d9d93d] rounded-[10px]">
        <input
          className="absolute w-[257px] top-[18px] left-[31px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff7d] text-[20px] tracking-[0] leading-[normal] bg-transparent border-none outline-none"
          type="text"
          placeholder="I enjoy..."
        />
      </div>
      <ChooseApp parentCallBack={handleData}/>

      <div className="absolute w-[188px] h-[219px] top-[557px] left-[298px]">
        <button className="absolute w-[188px] h-[219px] top-0 left-0">
          <div className="relative w-[186px] h-[219px] bg-[#d9d9d93d] rounded-[10px]">
            <div className="w-[186px] h-[219px] bg-[#d9d9d93d] rounded-[10px] absolute top-0 left-0" />
            <div className="w-[146px] left-[20px] absolute top-[157px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              ADD WEBSITE
            </div>
          </div>
          <img
            className="absolute w-[114px] h-[124px] top-[18px] left-[36px] object-cover"
            alt="Img"
            src="browser.png"
          />
        </button>
      </div>

      <p className="absolute top-[501px] left-[98px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffdfd] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        WHAT DO YOU WANT TO BLOCK?
      </p>

      <div className="absolute w-[504px] h-[62px] top-[693px] left-[644px]">
        <button className="relative w-[502px] h-[62px] bg-[#d9d9d93d] rounded-[100px]">
          <div className="absolute w-[180px] top-[19px] left-[161px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[25px] tracking-[5.00px] leading-[normal] whitespace-nowrap">
            CONTINUE
          </div>
          <img className="w-[502px] h-[62px] absolute top-0 left-0" alt="Rectangle" src="rectangle.png" />
        </button>
      </div>
    </div>
  </div>
);

    

    <div>
      <ChooseApp parentCallBack={handleData}/>
    </div>
}