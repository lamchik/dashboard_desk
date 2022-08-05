import {tags} from "./contstans/tags";

import {TagsList} from "./components/TagsList/TagsList";
import {Checkbox} from "./components/UI/Checkbox/Checkbox";
import {TaskCard} from "./components/TaskCard/TaskCard";
import {Button} from "./components/UI/Button/Button";
import {Input} from "./components/UI/Input/Input";
import {Multiselect} from "./components/UI/Multiselect/Multiselect";
import {Comment} from "./components/Comment/Comment";

import './assets/fonts/YandexSans.css'
import styles from './styles.module.css'
import {MainPage} from "./pages/MainPage/MainPage";
import {TicketPage} from "./pages/TicketPage/TicketPage";
import {Popup} from "./components/Popup/Popup";

export const App = () => {
  const name = 'Иванов Иван'
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
    'nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '

  return (
    <div className={styles.container}>
      <MainPage/>
      <Popup text='Создать тикет'/>

      {/*<TicketPage/>*/}
      {/*<TagsList withCheckbox={false} tags={tags}/>*/}
      {/*<TaskCard title='Нарисовать иллюстрации'/>*/}
      {/*<Button buttonText='Добавить тикет' withPlusIcon={true} isNormalButton={true}/>*/}
      {/*<Button buttonText='Сохранить'/>*/}
      {/*<Button buttonText='Сохранить' isSmallButton={true}/>*/}
      {/*<Button buttonText='Да' isYesOrNoButton={true}/>*/}
      {/*<Button buttonText='Добавить' isAddGreyButton={true}/>*/}
      {/*<Button buttonText='Добавить комментарий' isAddingCommentButton={true} withPlusIcon={true}/>*/}
      {/*<Checkbox isWithText={true} text='Комментарий' checkboxId='comment' />*/}
      {/*<Checkbox isWithText={true} text='Описание' checkboxId='description'/>*/}
      {/*<Checkbox isWithText={true} text='Тег' checkboxId='tag'/>*/}
      {/*<div>*/}
      {/*  <Input placeholder='Название'/>*/}
      {/*  <Input isInputMultiline={true} placeholder='Описание'/>*/}
      {/*</div>*/}
      {/*<Multiselect/>*/}
      {/*<Comment text={text} name={name}/>*/}
    </div>
  )
}
