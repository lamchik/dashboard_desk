import {useNavigate} from "react-router-dom";
import {CSS} from "@dnd-kit/utilities";
import {useSortable} from "@dnd-kit/sortable";

import warning from '../../assets/images/warning.svg'
import message from '../../assets/images/message.svg'
import {tags} from "../../contstans/tags";
import {TagsList} from "../TagsList/TagsList";
import {ButtonActionMenu} from "../UI/ButtonActionMenu/ButtonActionMenu";

import styles from './styles.module.css'

export const TaskCard = ({title, onTaskClick, id, tagIDs=[], description, comments}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({id});

  const navigate = useNavigate()
  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    userSelect: "none",
  };

  const goToTicketsPage = (e) => {
    e.stopPropagation()
    navigate(`/full/${id}`)
  }

  return (
    <div
      className={styles.container}
      style={itemStyle}
      onClick={() => onTaskClick(id)}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <p className={styles.text}>{title}</p>
      <ButtonActionMenu onButtonClick={goToTicketsPage}/>
      <div className={styles.tagsWrapper}>
        <TagsList
          isVertical
          withCheckbox={false}
          tags={tags.filter(tag => tagIDs.includes(tag.id))}
          isHorizontalSmallTag={true}
          tagsInTasksColumn={true}
        />
      </div>
      <div className={styles.messages}>
        {comments && <img src={warning} alt='warning' className={styles.img}/>}
        {description && <img src={message} alt='message' className={styles.img}/>}
      </div>
    </div>
  )
}
