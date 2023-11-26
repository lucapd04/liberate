import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { open } from '@tauri-apps/api/dialog';
import usePathStore from '@/store/usePathStore';


const ChooseApp = ({parentCallBack}) => {
    const {path, setPath} = usePathStore();

    const handleClick = async () => {
        const selected = await open({
            directory: false,
            multiple: false
          });
        
          if (selected !== null) {
            console.log(selected);  // This will log the selected file path
            parentCallBack(selected);
          } else {
            console.log('No file selected');
          }
    }


  return (
    <Button placeholder='Please Choose an App' onClick={handleClick}>
        Please Choose an App
    </Button>
  )
}

export default ChooseApp