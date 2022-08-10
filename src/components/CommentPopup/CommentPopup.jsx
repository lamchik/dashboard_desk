import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCommentThunk} from '../../store/tickets'
import closeIcon from '../../assets/images/closing.svg'
import {Input} from "../UI/Input/Input";
import {Button} from "../UI/Button/Button";
import classnames from "classnames";

import styles from './styles.module.css'

// todo: move all styles to separate component
export const CommentPopup = (
  {
    isVisible = false,
    close,
    ticketId,
}) => {
  const {register, handleSubmit, reset} = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(addCommentThunk({ticketId, comment: {name: data.name, comment: data.comment}}))
      .then(close(false))
      .finally(reset)
  };

  return (
    <div className={classnames({[styles.popupInvisible]: !isVisible}, styles.popupContainer)}>
      <div className={styles.popupWrapper} onClick={() => close(false)}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <button className={styles.button} onClick={() => close(false)}>
            <img src={closeIcon} alt='closing'/>
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.header}>Добавить комментарий</h1>
            <div className={styles.content}>
              <div>
                <Input placeholder="Имя" register={register} label="name"/>
                <Input isInputMultiline={true} placeholder='Комментарий' register={register} label="comment"/>
              </div>
              <Button isSubmit buttonText='Сохранить'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
