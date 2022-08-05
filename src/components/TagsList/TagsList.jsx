import classnames from "classnames";

import {Tag} from "../Tag/Tag";

import styles from './styles.module.css'


export const TagsList = ({
    isHorizontal = false,
    withCheckbox=false,
    tags, isHorizontalSmallTag = false
  }) => {

  return (
    <div className={classnames({
      [styles.wrapperHorizontal] : isHorizontal,
      [styles.wrapperHorizontalSmallTag] : isHorizontalSmallTag,
      [styles.wrapper] : !isHorizontal
    })}>
      {tags.map((tag) => (
        <Tag key={tag.id}
             classNameColor={tag.color}
             withCheckbox={withCheckbox}
        />
      ))}
    </div>
  )
}
