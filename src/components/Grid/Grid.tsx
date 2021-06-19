import React from 'react';
import styles from './Grid.module.css';
import Card from '../Card/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import { gridAreaCalculation } from '../../Utilities/Utilities';

const Grid = (props: { cardList: number[] }) => {
  const { cardList } = props;
  const [source, setSource] = useState<number>();
  const [destination, setDestination] = useState<number>();
  let cardCounter: number = 0;
  useEffect(() => {
    console.log(gridAreaCalculation(cardList.length));
    console.log(cardList.length);
  });
  console.log('source,destiniation =>', source, destination);

  const dragHandler = (event: any) => {
    setSource(event.target.querySelector('div')?.id);
  };
  const dragOverHandler = (e: any) => {
    setDestination(e.target.querySelector('div')?.id);
  };

  return (
    <div className={styles.gridContainer}>
      <div
        className={styles.grid}
        onDragStart={dragHandler}
        onDragOver={dragOverHandler}>
        {cardList.map((element) => (
          <Card
            area={gridAreaCalculation(cardList.length)}
            text={element + 1}
            key={element}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
