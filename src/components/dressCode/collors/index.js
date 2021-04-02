import s from './style.module.css'

const Collor = ({src, alt}) => {
    console.log(src)
    console.log(alt)
    return (
        <li className={s.list__item}>
            <img className={s.list__img} src={src} alt={alt}/>
        </li>
    );
};

export default  Collor;
