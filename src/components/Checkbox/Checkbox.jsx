import styles from './styles.module.css'

export const Checkbox = ({isWithText = false, text, checkboxId}) => {

  return (
    <div className={styles.checkboxWrapper}>
      <input type='checkbox' id={checkboxId} className={styles.customCheckbox}/>
      <label htmlFor={checkboxId}></label>
      {isWithText && <p className={styles.text}>{text}</p>}
    </div>
  )
}
