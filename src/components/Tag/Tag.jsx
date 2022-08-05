import classnames from "classnames";

import {Checkbox} from "../UI/Checkbox/Checkbox";

import styles from './styles.module.css'

export const Tag = ({
    classNameColor,
    withCheckbox
}) => {

  function getColor(classNameColor) {
    switch (classNameColor) {
      case 'colorViolent':
        return styles.colorViolent
      case 'colorRed':
        return styles.colorRed
      case 'colorGreen':
        return styles.colorGreen
      case 'colorOrange':
        return styles.colorOrange
      case 'colorBlue':
        return styles.colorBlue
      case 'colorLightGreen':
        return styles.colorLightGreen
      case 'colorDarkBlue':
        return styles.colorDarkBlue
      case 'colorYellow':
        return styles.colorYellow
      default: return ''
    }
  }

  const tag = withCheckbox ?
    <div className={styles.wrapper}>
      <div className={classnames(getColor(classNameColor), styles.tag)}></div>
      <Checkbox checkboxId={classNameColor}/>
    </div>
    :
    <div className={classnames(getColor(classNameColor), styles.tag)}></div>

  return (
    <>
      {tag}
    </>
  )
}

