import classnames from "classnames";

import adding from '../../../assets/images/plus_black.svg'
import plus from '../../../assets/images/plus_gray.svg'

import styles from './styles.module.css'

export const Button = (
  {
    buttonText,
    isSmallButton = false,
    onClick,
    withPlusIcon = false,
    isBigButton = true,
    isNormalButton=false,
    isAddGreyButton = false,
    isYesOrNoButton = false,
    isAddingCommentButton = false,
    isPositionCenter = true,
    isSubmit = false,
  }
) => {

  const src = isAddingCommentButton ? plus : adding

  return (
    <div className={classnames({
      [styles.positionCenter] : isPositionCenter
    }, styles.wrapper)}>
      <button type={isSubmit ? 'submit' : undefined} onClick={onClick} className={classnames(styles.button, {
        [styles.smallButton] : isSmallButton,
        [styles.bigButton] : isBigButton,
        [styles.normalButton] : isNormalButton,
        [styles.addGreyButton] : isAddGreyButton,
        [styles.yesOrNoButton] : isYesOrNoButton,
        [styles.addingCommentButton] : isAddingCommentButton,
      })}>
        {withPlusIcon && <img className={styles.img} src={src} alt='plus'/>}
        <p className={classnames(styles.buttonText, {
          [styles.addingCommentButtonText] : isAddingCommentButton,
        })}>{buttonText}</p>
      </button>
    </div>
    )
}
