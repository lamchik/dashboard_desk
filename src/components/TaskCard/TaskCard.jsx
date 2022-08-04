import {tags} from "../../contstans/tags";

import buttonImg from '../../assets/images/action_menu.svg'
import warning from '../../assets/images/warning.svg'
import message from '../../assets/images/message.svg'
import {TagsList} from "../TagsList/TagsList";

import styles from './styles.module.css'

export const TaskCard = ({title}) => {

  return (
    <div className={styles.container}>
      <p className={styles.text}>{title}</p>
      <button className={styles.button}>
        <img src={buttonImg} alt='button' className={styles.image}/>
      </button>
      <div className={styles.tagsWrapper}>
        <TagsList isVertical={true} withCheckbox={false} tags={tags}/>
      </div>
      <div className={styles.messages}>
        <img src={warning} alt='warning' className={styles.img}/>
        <img src={message} alt='message' className={styles.img}/>
      </div>
    </div>
  )

}
