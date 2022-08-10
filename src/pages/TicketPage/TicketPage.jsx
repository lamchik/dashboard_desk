import arrowBack from '../../assets/images/arrow_back.svg'
import {ButtonActionMenu} from "../../components/UI/ButtonActionMenu/ButtonActionMenu";
import {Input} from "../../components/UI/Input/Input";
import {TagsList} from "../../components/TagsList/TagsList";
import {Comment} from "../../components/Comment/Comment";
import {Button} from "../../components/UI/Button/Button";
import {tags} from "../../contstans/tags";

import styles from './styles.module.css'

export const TicketPage = () => {

  const name = 'Иванов Иван'
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
    'nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '

  return (
    <div>
      <button className={styles.buttonBack}>
        <img src={arrowBack} alt='arrow' className={styles.buttonIcon}/>
        <p className={styles.buttonText}>Вернуться назад</p>
      </button>

      <div className={styles.taskCardWrapper}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>Todo</h1>
          <ButtonActionMenu isAbsolute={false}/>
        </div>
        <div className={styles.taskCard}>
          <Input placeholder='Нарисовать иллюстрации'/>
          <Input isInputMultiline={true} placeholder='Подробное описание'/>
          <TagsList isVertical={true} withCheckbox={false} tags={tags} isHorizontal={true}/>
          <Comment text={text} name={name}/>
          <Button buttonText='Добавить комментарий' isAddingCommentButton={true} withPlusIcon={true} isPositionCenter={false}/>
          <Button buttonText='Сохранить' isSmallButton={true}/>
        </div>
      </div>
    </div>
  )
}
