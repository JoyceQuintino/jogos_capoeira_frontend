import React from 'react';
import styles from './NotePlayer.module.css';

const NotePlayer = (props) => {
  return (
    <div className={styles.player}>
      <div className={styles.pictureplayer}>
        <img src="" alt="" />
      </div>

      <h3>{props.apelido}</h3>

      <div>
        <input
          className={styles.noteindividual}
          type='number'
          step="0.1"
          value={props.nota}
          onChange={(event) => props.setNota(event.target.value)}
          min="-5" max="5"
        ></input>
      </div>


    </div>
  );
}

export default NotePlayer;