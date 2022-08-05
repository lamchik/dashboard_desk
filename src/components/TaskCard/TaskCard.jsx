import {tags} from "../../contstans/tags";
import warning from '../../assets/images/warning.svg'
import message from '../../assets/images/message.svg'
import {TagsList} from "../TagsList/TagsList";

import styles from './styles.module.css'
import {ButtonActionMenu} from "../ButtonActionMenu/ButtonActionMenu";

export const TaskCard = ({title}) => {

  return (
    <div className={styles.container}>
      <p className={styles.text}>{title}</p>
      <ButtonActionMenu/>
      <div className={styles.tagsWrapper}>
        <TagsList isVertical={true} withCheckbox={false} tags={tags} isHorizontalSmallTag={true}/>
      </div>
      <div className={styles.messages}>
        <img src={warning} alt='warning' className={styles.img}/>
        <img src={message} alt='message' className={styles.img}/>
      </div>
    </div>
  )

}
