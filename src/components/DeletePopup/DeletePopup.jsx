import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import classnames from "classnames";

import {deleteTicketThunk} from "../../store/tickets";

import styles from './styles.module.css'

export const DeletePopup = ({isVisible = false, setIsVisible, ticketId}) => {
  const dispatch = useDispatch()
  const {handleSubmit} = useForm();
  const navigate = useNavigate();
  const onSubmit = () => {
    dispatch(deleteTicketThunk(ticketId)).then(
      setIsVisible(false),
      navigate('/')
    )
  }

  const onCancelClick = (e) => {
    e.preventDefault()
    setIsVisible(false)
  }

  return (
    <div className={classnames(
      {[styles.popupInvisible]: !isVisible},
      styles.popupContainer)}
    >
      <div className={styles.popupWrapper} onClick={() => setIsVisible(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <p className={styles.text}>Удалить тикет?</p>
          <div className={styles.buttonWrapper}>
            <button type='submit' className={styles.button}>Да</button>
            <button className={styles.button} onClick={onCancelClick}>Нет</button>
          </div>
        </form>
      </div>
    </div>
  )
}
