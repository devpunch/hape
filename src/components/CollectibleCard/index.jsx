import checked from '../../assets/img/icons/check.svg'
import cn from 'classnames';
import s from './CollectibleCard.module.scss';

export const CollectibleCard = ({isActive, mainImg, little, small, middle, large}) => {
    return (
        <div className={cn(s.itemCard, {
            [s.littleItem]: little,
            [s.smallItem]: small,
            [s.middleItem]: middle,
            [s.largeItem]: large,

        })}

        >
            <div className={cn(s.activeCard, {
                [s.active]: isActive
            })}
            >
                { isActive && <img src={checked} alt="check icon"/>}
            </div>
            <img className={cn(s.mainImg, {
                [s.littleImg]: little,
                [s.smallImg]: small,
                [s.middleImg]: middle,
                [s.largeImg]: large
            })}
                 src={mainImg}
                 alt="item image"
            />
        </div>
    )
}
