'use client'

import { invoke } from '@tauri-apps/api/tauri'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import ChooseApp from '../components/ChooseApp';
import { appWindow } from '@tauri-apps/api/window';



export default function Home() {
  appWindow.setSize({width: 1280, height: 832, type: "Physical"});
  console.log(invoke("get_process_names"));

  const [application, setApplication] = useState("");

  const handleData = (dataFromChild:string) => {
    setApplication(dataFromChild);
  }


  return (



    <div>
      <ChooseApp parentCallBack={handleData}/>
    </div>
  )
}
