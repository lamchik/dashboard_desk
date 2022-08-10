import closeIcon from '../../assets/images/closing.svg'
import {Input} from "../UI/Input/Input";
import {Multiselect} from "../UI/Multiselect/Multiselect";
import {Button} from "../UI/Button/Button";

import styles from './styles.module.css'

export const Popup = ({text}) => {

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupWrapper}>

        <div className={styles.popup}>
          <button className={styles.button}>
            <img src={closeIcon} alt='closing'/>
          </button>
          <h1 className={styles.header}>{text}</h1>
          <div className={styles.content}>
            <div>
              <Input placeholder='Название'/>
              <Input isInputMultiline={true} placeholder='Описание'/>
              <Multiselect/>
            </div>
            <Button buttonText='Сохранить'/>
          </div>
        </div>
      </div>
    </div>
  )
}
