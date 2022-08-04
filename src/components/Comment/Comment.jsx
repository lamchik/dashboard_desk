import styles from './styles.module.css'

export const Comment = ({text, name}) => {

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.text}>{text}</p>
      <button className={styles.button}></button>
    </div>
  )
}
