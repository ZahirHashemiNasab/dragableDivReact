import React, { useState } from 'react';
import styles from './Grid.module.css';
import Card from '../Card/Card';
import { gridAreaCalculation } from '../../Utilities/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../types/type';
import { exchangeElements } from '../../store/action';

const Grid = (props: { cardList: number[] }) => {
  const { cardList } = props;
  const [source, setSource] = useState<number>();
  const [destination, setDestination] = useState<number>();
  const dispatch = useDispatch();
  const state: AppStateType = useSelector((state: AppStateType) => state);
  const dragHandler = (event: any) => {
    setSource(event.target.querySelector('div')?.id);
  };
  const dragOverHandler = (e: any) => {
    setDestination(e.target.querySelector('div')?.id);
  };
  const dragEndHandler = (e: any) => {
    dispatch(exchangeElements(source, destination, state.elementList));
  };

  return (
    <div className={styles.gridContainer}>
      <div
        className={styles.grid}
        onDragStart={dragHandler}
        onDragOver={dragOverHandler}
        onDragEnd={dragEndHandler}>
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
