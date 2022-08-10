import {useId} from 'react'

import styles from './styles.module.css'

export const Checkbox = ({isWithText = false, text, onChange, value, label, ref}) => {
  const checkboxId = useId()
  return (
    <div className={styles.checkboxWrapper}>
      <input
        type='checkbox'
        checked={value}
        onChange={onChange}
        id={checkboxId}
        className={styles.customCheckbox}
      />
      <label htmlFor={checkboxId}/>
      {isWithText && <label htmlFor={checkboxId} className={styles.text}>{text}</label>}
    </div>
  )
}
