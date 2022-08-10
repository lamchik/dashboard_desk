import classnames from "classnames";

import {Tag} from "../Tag/Tag";

import styles from './styles.module.css'

export const TagsList = ({
  isHorizontal = false,
  withCheckbox= false,
  tags,
  isHorizontalSmallTag = false,
  onChange,
  selected,
  tagsInTasksColumn,
}) => {
  return (
    <div className={classnames({
      [styles.wrapperHorizontal] : isHorizontal,
      [styles.wrapperHorizontalSmallTag] : isHorizontalSmallTag,
      [styles.wrapper] : !isHorizontal
    })}>
      {tags && tags.map((tag) => (
        <Tag
          key={tag.id}
          tagsInTasksColumn={tagsInTasksColumn}
          classNameColor={tag.color}
          withCheckbox={withCheckbox}
          value={withCheckbox && selected.includes(tag.id)}
          onChange={(e) => onChange(e, tag.id)}
        />
      ))}
    </div>
  )
}
