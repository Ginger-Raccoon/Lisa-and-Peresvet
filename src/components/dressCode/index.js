import colorsArr from "../../assets/colors/colorsArr";
import Collor from "./collors";

import s from './style.module.css';

const DressCode = () => {
    const stringTop = `Мы хотим чтобы всем было максимально комфортно,
                       поэтому не ставим рамки по цвету, форме и стилю одежды: 
                       каждый приходит в том, что ему подходит и что по душе! 
                       Но если  вы не знаете, что выбрать, ниже представлены те цвета, которые будут гармоничны с нами и нашим праздником. \n
                       🌸🌸🌸`
    const postScriptum = `P.S. Многие знают о нашей любви к природе, поэтому выбор цветов обусловлен именно этим. Все природные цвета подойдут идеально!🤗`
    return (
        <div className={s.dressCode} id='dress-code'>
            <div className={s.dressCode__row}>
                <h2 className={s.dressCode__title}>Дресс-код</h2>
            </div>
            <div className={s.dressCode__info}>
                <p className={s.dressCode__text}>{stringTop}</p>
                <p className={s.dressCode__text}>{postScriptum}</p>
            </div>
            <div className={s.dressCode__colors}>
                <h3 className={s.colors__title}>Варианты цветов</h3>
                <ul className={s.colors__list}>
                    {
                        colorsArr.map(item => <Collor
                            src={item.color}
                            alt={item.alt}
                        />)
                    }
                </ul>
            </div>
        </div>
    );
};

export default  DressCode;
