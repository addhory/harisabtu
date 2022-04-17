import React from 'react';
import styles from './title.module.css';

const Title = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.text}</h1>
    </div>
  );
};

export default Title;
