import React from 'react'

import './collection-item.styles.scss';

type CollectionItemProps = {
  name: string;
  imageUrl: string;
  price: number;
}

export const CollectionItem = ({ name, imageUrl, price }: CollectionItemProps) => (
  <div className='collection-item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)
