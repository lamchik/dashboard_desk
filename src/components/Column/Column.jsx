import {TaskCard} from "../TaskCard/TaskCard";
import {Button} from "../Button/Button";

import styles from './styles.module.css'

export const Column = ({text, isDoneColumn = false}) => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{text}</h1>
      <div className={styles.column}>
        <TaskCard title='Нарисовать иллюстрации'/>
        <TaskCard title='Нарисовать иллюстрации'/>
        <TaskCard title='Нарисовать иллюстрации'/>
        <TaskCard title='Нарисовать иллюстрации'/>
        <TaskCard title='Нарисовать иллюстрации'/>
        {!isDoneColumn && <Button buttonText='Добавить тикет' withPlusIcon={true} isNormalButton={true}/>}
      </div>
    </div>
  )
}
