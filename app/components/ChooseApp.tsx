import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { invoke } from '@tauri-apps/api/tauri'
import { open } from '@tauri-apps/api/dialog';


const ChooseApp = () => {
    const [path,setPath] = useState("");

    const handleClick = async () => {
        const selected = await open({
            directory: false,
            multiple: false
          });
        
          if (selected !== null) {
            console.log(selected);  // This will log the selected file path
          } else {
            console.log('No file selected');
          }
    }


  return (
    <Button placeholder='Please Choose an App' onClick={handleClick}>
    </Button>
  )
}

export default ChooseApp