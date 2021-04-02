import quizDecore from '../../assets/QuizDecor.png'
import quizeButton from '../../assets/QuizButton.png'

import s from './style.module.css'

const Quiz = () => {
    const title = `Дорогой гость!\n
     Чтобы облегчить нам организацию праздника, мы просим тебя пройти короткий опрос.`
    const postScriptum = `P.S. Вы можете заполнить опрос на двоих, если ваши ответы совпадают.`
    return (
        <div className={s.quiz} id='quiz'>
            <div className={s.quiz__row}>
                <h2 className={s.quiz__title}>{title}</h2>
                <p className={s.quiz__text}>{postScriptum}</p>
            </div>
            <div className={s.quiz__buttonContainer} style={{backgroundImage: `url(${quizDecore})`}}>
                <a href='#' className={s.quiz__button}><img src={quizeButton} alt="Цветок фиалки"/></a>
            </div>
        </div>
    );
};

export default  Quiz;
