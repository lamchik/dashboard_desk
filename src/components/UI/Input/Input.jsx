import styles from './styles.module.css'

export const Input =
  ({
    isInputMultiline = false,
    placeholder,
    isDisabled=false,
    label,
    register,
    initialValue
  }) => {
  return (
    isInputMultiline ?
      <textarea
        disabled={isDisabled}
        defaultValue={initialValue}
        className={styles.textarea}
        placeholder={placeholder} {...
        register(label)}
      /> :
      <input
        disabled={isDisabled}
        defaultValue={initialValue}
        className={styles.input}
        placeholder={placeholder} {...
        register(label)}
      />
  )
}
