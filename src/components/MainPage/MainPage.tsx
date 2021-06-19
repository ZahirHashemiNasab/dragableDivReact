import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import Icon from '@material-ui/core/Icon';
import Grid from '../Grid/Grid';

const MainPage = () => {
  let section = document.getElementById('grid');
  const [cardCount, setCardCount] = useState<number>(0);
  const [cardList, setCardList] = useState<number[]>([]);
  const onAddCardClick = () => {
    cardList.length < 12
      ? setCardList([...cardList, cardCount])
      : setCardList([...cardList]);

    cardList.length < 12
      ? setCardCount(cardCount + 1)
      : setCardCount(cardCount);
  };
  useEffect(() => {
    console.log('counter', cardCount, cardList);
  }, [cardCount]);

  return (
    <div className={styles.containerDiv}>
      <div className={styles.header}>UniClient</div>
      <div className={styles.content}>
        <Grid cardList={[...cardList]} />
      </div>
      <div className={styles.footer}>
        <AddCircleRoundedIcon
          onClick={onAddCardClick}
          color='primary'
          style={{
            backgroundColor: 'white',
            color: '#05b6d4',
            borderRadius: '50%',
            border: '2px #05b6d4',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
        />
        <Icon className='fa fa-plus-circle' color='primary' />
      </div>
    </div>
  );
};

export default MainPage;
