import React from 'react'

import './collection-preview.styles.scss';

import { CollectionItem } from '../collection-item/collection-item.component';

type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type CollectionPreviewProps = {
  title: string;
  items: Item[];
};

export const CollectionPreview = ({ title, items }: CollectionPreviewProps) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))
        }
      </div>
    </div>
  );
}
