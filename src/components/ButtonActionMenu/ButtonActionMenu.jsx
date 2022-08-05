import classnames from "classnames";
import styles from './styles.module.css'
import buttonImg from "../../assets/images/action_menu.svg";

export const ButtonActionMenu = ({isAbsolute=true}) => {

  return (
    <button className={classnames({
      [styles.absolute] : isAbsolute
    }, styles.button)}>
      <img src={buttonImg} alt='button' className={styles.image}/>
    </button>
  )
}
