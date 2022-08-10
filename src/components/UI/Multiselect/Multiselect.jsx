import {tags} from "../../../contstans/tags";

import arrow from "../../../assets/images/arrow_down.svg";
import {TagsList} from "../../TagsList/TagsList";

import styles from './styles.module.css'

export const Multiselect = () => {

  return (
    <details className={styles.wrapper}>
      <summary className={styles.buttonSelect}>
        <p className={styles.textSelect}>Выбрать тег</p>
        <img src={arrow} alt='arrow'/>
      </summary>
        <div className={styles.tagsListWrapper}>
          <div className={styles.tagsList}>
            <TagsList withCheckbox={true} tags={tags}/>
          </div>
        </div>
    </details>
  )
}
