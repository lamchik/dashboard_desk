import classnames from "classnames";

import {Checkbox} from "../UI/Checkbox/Checkbox";
import {useId} from "react";

import styles from './styles.module.css'

export const Tag = (
  {
    classNameColor,
    withCheckbox,
    value,
    onChange,
    tagsInTasksColumn=false,
    tagsInMultiselect = false
}) => {
  const id = useId();

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
      default:
        return ''
    }
  }

  return (
    withCheckbox ?
      <div className={styles.wrapper}>
        <label htmlFor={id} className={classnames(getColor(classNameColor), styles.tag)}></label>
        <Checkbox value={value} onChange={onChange}/>
      </div>
      :
      <div className={
        classnames(getColor(classNameColor),
          styles.tag,
          {
            [styles.smallTag] : tagsInTasksColumn,
            [styles.tagsInMultiselect] : tagsInMultiselect
          }

        )}></div>
  )
}

