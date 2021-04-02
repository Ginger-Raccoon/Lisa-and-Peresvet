import Header from "./components/header/Header";
import Logo from './assets/Logo.png';
import Main from "./components/main";
import DressCode from "./components/dressCode";
import Violet from './assets/violet.png'
import Quiz from "./components/quiz";
import Location from "./components/location";
import SecondDay from "./components/secondDay";
import Footer from "./components/footer";

import s from './style.module.css';

function App() {
  return (
    <div className={s.body}>
      <Header />
      <img className={s.body__logo} src={Logo} alt='Логотип свадьбы'/>
      <Main />
      <img className={s.body__decore} src={Violet} alt='Альпийская горка из фиалок'/>
      <DressCode />
      <Quiz />
      <Location />
      <SecondDay />
      <Footer />
    </div>
  );
}

export default App;
