import {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {
  getTicketByIdSelector,
  getTicketByIdThunk,
  updateTicketThunk
} from "../../store/tickets";
import arrowBack from '../../assets/images/arrow_back.svg'
import {tags} from "../../contstans/tags";
import {ButtonActionMenu} from "../../components/UI/ButtonActionMenu/ButtonActionMenu";
import {Input} from "../../components/UI/Input/Input";
import {TagsList} from "../../components/TagsList/TagsList";
import {Comment} from "../../components/Comment/Comment";
import {Button} from "../../components/UI/Button/Button";
import {EditAndDeletePopup} from "../../components/EditAndDeletePopup/EditAndDeletePopup";
import {DeletePopup} from "../../components/DeletePopup/DeletePopup";
import {Multiselect} from "../../components/UI/Multiselect/Multiselect";
import {CommentPopup} from "../../components/CommentPopup/CommentPopup";

import styles from './styles.module.css'

export const TicketPage = ({commentPopupOpened=false}) => {
  const [isOpenEditAndDeletePopup, setIsOpenEditAndDeletePopup] = useState(false)
  const [isOpenDeletePopup, setIsOpenDeletePopup] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const {ticketId} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ticket = useSelector(getTicketByIdSelector(ticketId))
  const {register, handleSubmit, setValue} = useForm({
    defaultValues: {
      name: ticket?.name,
      description: ticket?.description,
      tags: ticket?.tags,
    }
  });

  useEffect(() => {
    dispatch(getTicketByIdThunk(ticketId))
  }, [])

  const onButtonClick =() => {
    setIsOpenEditAndDeletePopup(true)
  }
  const openDeletePopup = () => {
    setIsOpenDeletePopup(true)
    setIsOpenEditAndDeletePopup(false)
  }

  const onEditTicket = () => {
    setIsDisabled(false)
    setIsOpenEditAndDeletePopup(false)
  }

  const onSubmit = (data) => {
    console.log("SUBMITTON", data)
    dispatch(updateTicketThunk({
      id: ticket.id,
      ticket: {...ticket, name: data.name || ticket.name, description: data.description || ticket.description, tags: data.tags || ticket.tags},
    })).then(() => setIsDisabled(true))
  };

  return ( ticket &&
    <div>
      <button className={styles.buttonBack} onClick={() => navigate('/')}>
        <img src={arrowBack} alt='arrow' />
        <p className={styles.buttonText}>Вернуться назад</p>
      </button>

      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>Todo</h1>
        <ButtonActionMenu isAbsolute={false} onButtonClick={onButtonClick} isVisible={isDisabled}/>
      </div>

      <div className={styles.taskCard}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input initialValue={ticket.name} placeholder='Нарисовать иллюстрации' isDisabled={isDisabled} register={register} label="name"/>
          <Input initialValue={ticket.description} isInputMultiline={true} placeholder='Подробное описание' isDisabled={isDisabled} register={register} label="description"/>
          {isDisabled && <TagsList isVertical={true} withCheckbox={false} tags={ticket.tags && tags.filter(tag => ticket.tags.includes(tag.id))} isHorizontal={true} />}
          {!isDisabled && <Multiselect setValue={setValue} ticket={ticket} label="tags"/>}

          {ticket && ticket.comments && ticket.comments.map(({name, comment, id}) => (
            <Comment text={comment} name={name} key={id}/>
          ))}

          <Button
            buttonText='Добавить комментарий'
            isAddingCommentButton={true}
            withPlusIcon={true}
            isPositionCenter={false}
            onClick={()=> navigate(`/full/${ticketId}/comment/create`)}
          />
          {!isDisabled && <Button isSubmit buttonText='Сохранить' isSmallButton={true}/>}
        </form>

        <EditAndDeletePopup
          isVisible={isOpenEditAndDeletePopup}
          setIsVisible={setIsOpenEditAndDeletePopup}
          openDeletePopup={openDeletePopup}
          onClickEditButton={onEditTicket}
        />
      </div>

      <DeletePopup ticketId={ticketId} isVisible={isOpenDeletePopup} setIsVisible={setIsOpenDeletePopup}/>

      <CommentPopup
        close={() => navigate(`/full/${ticketId}`)}
        isVisible={commentPopupOpened}
        ticketId={ticketId}
      />
    </div>
  )
}
