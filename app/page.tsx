import { invoke } from '@tauri-apps/api/tauri'
const invoke = window.__TAURI__.invoke
invoke('show_screen')


export default function Home() {
  return (
    <main>
      
    </main>
  )
}
