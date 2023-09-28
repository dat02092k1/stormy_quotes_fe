import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

function Header() {
  return (
    <div className='bg-[#2f418e] text-white p-5'>
      <div className='flex justify-between'>
        <div className='flex gap-2 justify-center items-center'>
         

        <div className='flex items-center gap-6 text-[18px]'>
        <div className='h-[40px] w-[181px]'>
          <a href="">
          <img src="https://www.brainyquote.com/st/img/5582055/brainyquote_sl@2x.png"  alt="" />
          </a>
        </div>
        <a > 
            Home
          </a>

          <a>
            Quote of the day
          </a>
        </div>
        </div>
        <div className='flex items-center'>
        <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <i className="fa-solid fa-list"></i>
      </Space>
    </a>
  </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header