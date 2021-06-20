import React from 'react';
import styles from './MainPage.module.css';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Icon from '@material-ui/core/Icon';
import Grid from '../Grid/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { AddElement, addCounter } from '../../store/action';
import { AppStateType } from '../../types/type';

const MainPage = () => {
  const dispatch = useDispatch();
  const state: AppStateType = useSelector((state: AppStateType) => state);
  const onAddCardClick = () => {
    dispatch(addCounter(state.cardCount + 1));
    if (state.elementList.length < 12) {
      dispatch(AddElement([...state.elementList, state.cardCount]));
    }
  };

  return (
    <div className={styles.containerDiv}>
      <div className={styles.header}>UniClient</div>
      <div className={styles.content}>
        <Grid cardList={[...state.elementList]} />
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
