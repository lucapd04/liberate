'use client'

import { invoke } from '@tauri-apps/api/tauri'

export default function Home() {

  setTimeout(() => console.log(invoke('get_process_names'), 5000));
 

  return (
    <main>
      
    </main>
  )
}
