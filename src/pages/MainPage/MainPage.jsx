import {Column} from "../../components/Column/Column";
import {Checkbox} from "../../components/Checkbox/Checkbox";
import {Button} from "../../components/Button/Button";

import styles from './styles.module.css'

export const MainPage = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <Checkbox isWithText={true} text='Комментарий' checkboxId='comment' />
        <Checkbox isWithText={true} text='Описание' checkboxId='description'/>
        <Checkbox isWithText={true} text='Тег' checkboxId='tag'/>
      </div>
      <div className={styles.columnWrapper}>
        <Column text='Todo'/>
        <Column text='In progress'/>
        <Column text='Done' isDoneColumn={true}/>
      </div>
    </div>
  )
}
