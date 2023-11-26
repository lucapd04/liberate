'use client'

import { invoke } from '@tauri-apps/api/tauri'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import ChooseApp from '../components/ChooseApp';




export default function Home() {

  console.log(invoke("get_process_names"))

  const [application, setApplication] = useState("");

  const handleData = (dataFromChild:string) => {
    setApplication(dataFromChild);
  }


  return (



    <div>
      <ChooseApp/>
    </div>
  )
}
