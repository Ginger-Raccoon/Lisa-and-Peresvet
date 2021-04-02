import s from './style.module.css'

const SecondDay = () => {

    return (
        <div className={s.secondDay} id='secondDay'>
            <div className={s.secondDay__row}>
                <h2 className={s.secondDay__title}>Для тех, кто не готов ограничиваться одним днем </h2>
            </div>
            <div className={s.secondDay__text}>
                <p>Если вы хотите остаться на ночь, вы можете договориться о брони номера или коттеджа с менеджером Дарьей <a href='tel:+79650000000' className={s.secondDay__tel}>+7 (965) 000-00-00</a></p>
                <p className={s.secondDay__secret}>🤫Кодовая фраза: свадьба в шатре «Еловый» 30го мая</p>
                <p className={s.secondDay__postScriptum}>Дополнительная информация будет появляться на сайте либо личным сообщением в WhatsApp</p>
            </div>
        </div>
    );
};

export default  SecondDay;
