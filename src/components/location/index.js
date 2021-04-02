import locationLink from '../../assets/locationLink.png'

import s from './style.module.css'

const Location = () => {
    return (
        <div className={s.location} id='location'>
            <div className={s.location__row}>
                <h2 className={s.location__title}>Место проведения</h2>
            </div>
            <a href="https://голицынклуб.рф/" target='_blank' className={s}><img className={s.location__link} src={locationLink} alt='Сайт Парк-Отель "Голицын Клуб"'/></a>
            <div className={s.location__сontacts}>
                <p>Контактное лицо</p>
                <div className={s.contacts__info}>
                    <p className={s.contacts__name}>Иванов Иван</p>
                    <a className={s.contacts__tel} href='tel:+79650000000'>+7(965)000-00-00</a>
                </div>
            </div>
            <div className={s.location__map}>
                <iframe className={s.location__frame}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A585032db33c61941bddab43fdde679a586dcc8e2909ea03891a42af6a5082180&amp;source=constructor"
                    width="600" height="600" frameBorder="0"></iframe>
                <div className={s.map__text}>
                    <h3 className={s.map__title}>Схема проезда:</h3>
                    <p className={s.map__address}>Адрес: Московская область, Одинцовский район, г.Голицыно, Минское шоссе, д. 45 (47-й км Минского шоссе или 30 км от МКАД). </p>
                    <p className={s.map__navi}>При использовании навигатора, наберите «Голицын Клуб».</p>
                </div>
            </div>

        </div>
    );
};

export default  Location;
