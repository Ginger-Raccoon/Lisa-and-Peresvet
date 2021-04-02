import s from './style.module.css';

function Header() {
    return (
        <div className={s.header} id='header'>
            <nav className={s.nav}>
                <li><a href="#main" className={s.link}>Что? Где? Когда?</a></li>
                <li><a href="#dress-code" className={s.link}>Дресс-код</a></li>
                <li><a href="#quiz" className={s.link}>Фуршет</a></li>
                <li><a href="#location" className={s.link}>Место проведения</a></li>
                <li><a href="#secondDay" className={s.link}>2й День</a></li>
            </nav>
        </div>
    );
}

export default Header;
