'use client'

import { invoke } from '@tauri-apps/api/tauri'
import { Button } from '@/components/ui/button'
import { Slide1 } from '../components/Slide1'
import React, { useState } from 'react';

export default function Home() {
  const [slideNum, setSlideNum] = useState(1);


  if (slideNum == 1){
    return (
      <main>
        <Slide1>
        </Slide1>
      </main>
    )
  }


  return (
    <div></div>
  )

}
