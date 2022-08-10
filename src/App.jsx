import './assets/fonts/YandexSans.css'
import styles from './styles.module.css'
import {TicketPage } from "./pages/TicketPage/TicketPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";


export const App = () => {

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainPage/>}>
            <Route path="/:mode/" element={<MainPage/>}/>
            <Route path="/:mode/:ticketId" element={<MainPage/>}/>
          </Route>
          <Route path="/full/:ticketId" element={<TicketPage/>} />}/>
          <Route path="/full/:ticketId/comment/create" element={<TicketPage commentPopupOpened/>}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
