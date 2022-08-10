import classnames from "classnames";

import buttonImg from "../../../assets/images/action_menu.svg";

import styles from './styles.module.css'

export const ButtonActionMenu = ({isAbsolute=true, onButtonClick, isVisible = true}) => {

  return (
    <button onClick={onButtonClick}
      className={classnames({
      [styles.absolute] : isAbsolute,
      [styles.inVisible] : !isVisible
    }, styles.button)}>
      <img src={buttonImg} alt='button' className={styles.image}/>
    </button>
  )
}
