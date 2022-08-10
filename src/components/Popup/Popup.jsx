import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createTicketThunk, updateTicketThunk} from '../../store/tickets'
import closeIcon from '../../assets/images/closing.svg'
import {Input} from "../UI/Input/Input";
import {Multiselect} from "../UI/Multiselect/Multiselect";
import {Button} from "../UI/Button/Button";

import styles from './styles.module.css'

export const Popup = (
  {
    text,
    setIsVisible,
    titlePlaceholder,
    isAddingCommentPopup = false,
    descriptionPlaceholder,
    ticket,
    groupId,
  }) => {
  const {register, handleSubmit, reset, setValue} = useForm({
    defaultValues: {
      name: ticket?.name,
      description: ticket?.description,
      tags: ticket?.tags,
    }
  });
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    console.log(data)
    console.log("SUBMITTING", data)
    if (ticket) {
      dispatch(updateTicketThunk({
        id: ticket.id,
        ticket: {...ticket, name: data.name, description: data.description, tags: data.tags},
      })).then(() => {setIsVisible(false)}).finally(() => reset())
    } else {
      console.log('creating a ticket')
      dispatch(createTicketThunk({
        name: data.name,
        description: data.description,
        tags: data.tags,
        group: groupId,
      })).then(() => {setIsVisible(false)}).finally(() => reset())
    }
  };

  return (
    <div className={styles.popupContainer}>
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
                {!isAddingCommentPopup && <Multiselect setValue={setValue} label="tags" ticket={ticket} />}
              </div>
              <Button isSubmit buttonText='Сохранить'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
