import React from 'react'

type MyProps = {
  title: string;
}

export const MenuItem = ({ title }: MyProps) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}
