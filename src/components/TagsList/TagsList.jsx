import classnames from "classnames";

import {Tag} from "../Tag/Tag";

import styles from './styles.module.css'


export const TagsList = ({isVertical = false, withCheckbox=false, tags}) => {

  return (
    <div className={classnames({
      [styles.wrapperVertical] : isVertical
    }, styles.wrapper)}>
      {tags.map((tag) => (
        <Tag key={tag.id} classNameColor={tag.color} withCheckbox={withCheckbox}/>
      ))}
    </div>
  )
}
