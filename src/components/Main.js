import React from 'react';
import Card from './Card';
import data from '../data';

export default function Main() {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const cardElements = data.map((item) => <Card key={item.id} {...item} />);
  return (
    <main>
      {cardElements}
    </main>
  );
}
