import {useState} from "react";

import {tags} from "../../../contstans/tags";
import arrow from "../../../assets/images/arrow_down.svg";
import {TagsList} from "../../TagsList/TagsList";
import {Tag} from "../../Tag/Tag";

import styles from './styles.module.css'

export const Multiselect = ({label, ticket, setValue}) => {
  const [selected, setSelected] = useState(ticket?.tags || [])

  const onChange = (e, tagID) => {
    const newSelected = [...selected]
    const idx = newSelected.indexOf(tagID)
    if (idx === -1) {
      newSelected.push(tagID)
    } else {
      newSelected.splice(idx, 1)
    }

    setSelected(newSelected)
    setValue(label, newSelected)
  }

  const inputs = selected.map((tagId) => (
    <Tag key={tagId} classNameColor={tags.find((tag) => tag.id === tagId).color} tagsInMultiselect={true}/>
  ))

  console.log('inputs', inputs)

  return (
    <div>
      <div className={styles.currentTagsWrapper}>
        {inputs}
      </div>
      <details className={styles.wrapper}>
        <summary className={styles.buttonSelect}>
          <p className={styles.textSelect}>Выбрать тег</p>
          <img src={arrow} alt='arrow'/>
        </summary>
          <div className={styles.tagsListWrapper}>
            <div className={styles.tagsList}>
              <TagsList withCheckbox tags={tags} selected={selected} onChange={onChange}/>
            </div>
          </div>
      </details>
    </div>
  )
}
