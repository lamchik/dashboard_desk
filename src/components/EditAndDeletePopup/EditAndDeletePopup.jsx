import classnames from "classnames";

import closing from '../../assets/images/closing.svg'

import styles from './styles.module.css'

export const EditAndDeletePopup = (
  {
    isVisible = false,
    setIsVisible,
    openDeletePopup,
    onClickEditButton}
) => {

  return (
    <div className={classnames(
      {[styles.popupInvisible] : !isVisible},
      styles.popup)}
    >
      <button className={styles.closeButton} onClick={() => setIsVisible(false)}>
        <img src={closing} alt='close'/>
      </button>
      <button className={styles.button} onClick={openDeletePopup}>
        <p className={styles.text}>Удалить</p>
      </button>
      <button className={styles.button} onClick={onClickEditButton}>
        <p className={styles.text}>Редактировать</p>
      </button>
    </div>
  )
}
