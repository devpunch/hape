import linkIcon from '../../assets/img/linkIcon.png';
import cn from 'classnames';
import s from './CardOne.module.scss';

export const Card = ({ children, name, avatar, socialNetwork, text, price, mainImg, btnBuy, small, middle, large, little}) => {
    return (
        <div className={cn(s.wrapper, {
            [s.littleHeight]: little,
            [s.smallHeight]: small,
            [s.middleHeight]: middle,
            [s.largeHeight]: large,
        })}>
            {children}
            <div className={s.links}>
                <div className={s.social}>
                    <img className={s.socialNetwork} src={socialNetwork} alt="socialNetwork icon"/>
                    <img className={s.avatar} src={avatar} alt="avatar icon"/>
                    { name && <a href="#">{name}</a> }
                </div>
                <img src={linkIcon} alt="icon image"/>
            </div>
            <img className={cn(s.mainImg, {
                [s.littleImg]: little,
                [s.smallImg]: small,
                [s.middleImg]: middle,
                [s.largeImg]: large
            })}
                 src={mainImg}
                 alt="item image"/>
            <div className={s.info}>
                <p>
                    { text }
                </p>
                <span>
                    <sub>$</sub>
                    { price }
                </span>
            </div>
            <div className={s.button}>
                { btnBuy && <img src={btnBuy} alt="btn image"/> }
            </div>
        </div>
    )
}
