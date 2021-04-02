import SwiftSlider from 'react-swift-slider'
import imgData from '../../assets/slider/imgArr'

import 'react-slideshow-image/dist/styles.css'
import s from './style.module.css';



const Main = () => {
    const str = `Дорогой гость! Мы приглашаем тебя на Наш праздник! \n
                 Когда: 30.05.2021 \n
                 Где: парк-отель Голицын Клуб \n
                 Сбор гостей с 14:30 до 16:00 \n
                 До начала Вас будут ждать лёгкие закуски и напитки. \n
                 Начало мероприятия в 16:00`

    return (
        <div className={s.main} id='main'>
            <div className={s.main__info}>
                <p className={s.main__text}>{str}</p>
                <SwiftSlider data={imgData} showDots={false} height={600} enableNextAndPrev={false} />
            </div>
        </div>
    );
};

export default  Main;
