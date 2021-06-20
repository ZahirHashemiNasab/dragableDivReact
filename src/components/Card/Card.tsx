import React from 'react';
import styles from './Card.module.css';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType, CardPropType } from '../../types/type';
import { removeElementById } from '../../store/action';

const Card = (props: CardPropType) => {
  const dispatch = useDispatch();
  const state: AppStateType = useSelector((state: AppStateType) => state);

  const onElementDelete = (id: number) => {
    dispatch(removeElementById(id - 1, state.elementList));
  };

  return (
    <span
      className={styles.card}
      style={{ gridArea: `${props?.area}` }}
      draggable
      id={`div${props.text}`}>
      <div className={styles.cardHeader} id={`${props.text}`}>
        <div onClick={(e) => onElementDelete(props.text)}>
          <DeleteTwoToneIcon
            style={{ fontSize: 15, color: 'white', cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className={styles.cardFooter} id={`${props.text}`}>
        User{props?.text}
      </div>
    </span>
  );
};

export default Card;
