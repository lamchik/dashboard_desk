import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import {TaskCard} from "../TaskCard/TaskCard";
import {Button} from "../UI/Button/Button";

import styles from './styles.module.css'

export const Column = ({index, onClick, onTaskClick, id, tickets}) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const droppableStyle = {
    touchAction: "none",
  };

  return (
    <SortableContext
      className={styles.wrapper}
      id={id}
      items={tickets}
      strategy={rectSortingStrategy}
    >
      <div className={styles.column} style={droppableStyle} ref={setNodeRef}>
        {tickets.map((ticket) => (
          <TaskCard
            key={ticket.id}
            id={ticket.id}
            title={ticket.name}
            tagIDs={ticket.tags}
            description={ticket.description}
            comments={ticket.comments}
            onTaskClick={onTaskClick}
          />
        ))}
        {
          <Button buttonText='Добавить тикет' withPlusIcon={true} isNormalButton={true} onClick={() => onClick(id)}/>
        }
      </div>
    </SortableContext>
  )
}
