import {useForm} from "react-hook-form";
import closeIcon from '../../assets/images/closing.svg'
import {Input} from "../UI/Input/Input";
import {Multiselect} from "../UI/Multiselect/Multiselect";
import {Button} from "../UI/Button/Button";
import {createTicketThunk, updateTicketThunk} from '../../store/tickets'

import styles from './styles.module.css'
import classnames from "classnames";
import {useDispatch} from "react-redux";

export const Popup = (
  {
    text,
    isVisible = false,
    setIsVisible,
    titlePlaceholder,
    isAddingCommentPopup = false,
    descriptionPlaceholder,
    ticket,
    groupId,
  }) => {
  const {register, handleSubmit, reset} = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    console.log("SUBMITTING", data)
    if (ticket) {
      dispatch(updateTicketThunk({
        id: ticket.id,
        // todo: update tags
        ticket: {...ticket, name: data.name, description: data.description},
      })).then(() => {setIsVisible(false)}).finally(() => reset())
    } else {
      console.log('creating a ticket')
      dispatch(createTicketThunk({
        name: data.name,
        description: data.description,
        group: groupId,
      })).then(() => {setIsVisible(false)}).finally(() => reset())
    }
  };

  return (
    <div className={classnames({[styles.popupInvisible]: !isVisible}, styles.popupContainer)}>
      <div className={styles.popupWrapper} onClick={() => setIsVisible(false)}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <button className={styles.button} onClick={() => setIsVisible(false)}>
            <img src={closeIcon} alt='closing'/>
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.header}>{text}</h1>
            <div className={styles.content}>
              <div>
                <Input initialValue={ticket?.name} placeholder={titlePlaceholder} register={register} label="name"/>
                <Input
                  initialValue={ticket?.description}
                  isInputMultiline={true}
                  placeholder={descriptionPlaceholder}
                  register={register} label="description"
                />
                {!isAddingCommentPopup && <Multiselect/>}
              </div>
              <Button isSubmit buttonText='Сохранить'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
