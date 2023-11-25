'use client'

import { invoke } from '@tauri-apps/api/tauri'

export default function Home() {

  setTimeout( () => invoke("show_window"), 15000);
 



  return (
    <main>
      
    </main>
  )
}
