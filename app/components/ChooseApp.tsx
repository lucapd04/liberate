import React from 'react';
import { open } from '@tauri-apps/api/dialog';
import usePathStore from '@/store/usePathStore';
import { getExeName } from '@/actions/binaryName';

const ChooseApp = ({ parentCallBack }) => {
  const { path, setPath } = usePathStore();

  const handleClick = async () => {
    const selected = await open({
      directory: false,
      multiple: false,
    });

    if (selected !== null) {
      console.log(selected); // This will log the selected file path
      setPath(selected); // Update the path state
      parentCallBack(selected);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="absolute w-[188px] h-[219px] top-[557px] left-[56px]">
      <button onClick={handleClick} className="relative w-[186px] h-[219px] bg-[#d9d9d93d] rounded-[10px]">
        <div className="w-[186px] h-[219px] bg-[#d9d9d93d] rounded-[10px] absolute top-0 left-0" />
        <div className="w-[89px] left-[48px] absolute top-[157px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          ADD APP
        </div>
        {path === '' ? (
          <img
            className="absolute w-[114px] h-[114px] top-[23px] left-[36px] object-cover"
            alt="Element"
            src="plus.png"
          />
        ) : (
          <div className=' text-white'>{getExeName(path)}</div>
        )}
      </button>
    </div>
  );
};

export default ChooseApp;
