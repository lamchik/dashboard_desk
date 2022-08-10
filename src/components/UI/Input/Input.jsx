import styles from './styles.module.css'

export const Input = ({isInputMultiline = false, placeholder}) => {


  return(
    isInputMultiline ?
      <textarea className={styles.textarea} placeholder={placeholder}></textarea> :
      <input className={styles.input} placeholder={placeholder}/>
  )

}
