import React from 'react';
import { useEffect } from 'react';
import styles from './Card.module.css';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const Card = (props: any) => {
  useEffect(() => {
    console.log('card renderd');
  });
  return (
    <span
      className={styles.card}
      style={{ gridArea: `${props?.area}` }}
      draggable
      id={`div${props.text}`}>
      <div className={styles.cardHeader} id={props.text}>
        <DeleteTwoToneIcon
          style={{ fontSize: 15, color: 'white', cursor: 'pointer' }}
        />
      </div>
      <div className={styles.cardFooter} id={props.text}>
        User{props?.text}
      </div>
    </span>
  );
};

export default Card;
