import {Put} from "../index";
import itemLink from '../../assets/img/linkIcon.png';
import instagram from '../../assets/img/instagram.png';
import avatar from '../../assets/img/pivovarov.png';
import btnDone from '../../assets/img/btns/done51.png';
import pen from '../../assets/img/icons/pen.svg';
import transfer from '../../assets/img/icons/transfer.svg';
import burn from '../../assets/img/icons/burn.svg';
import cn from 'classnames';
import s from './CardActivated.module.scss';

export const CardActivated = ({little, small, middle, large, one, two}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.links}>
                <div className={s.social}>
                    <img src={instagram} alt="instagram icon"/>
                    <img src={avatar} alt="avatar icon"/>
                    <a href="#">Tiktok_artist</a>
                </div>
                <img src={itemLink} alt="icon"/>
            </div>
            {
                one && <div className={cn(s.choice, {
                            [s.littleBox]: little,
                            [s.smallBox]: small,
                            [s.middleBox]: middle,
                            [s.largeBox]: large
                        })}>
                            <div className={s.numbers}>
                                <div className={s.price}>
                                    <span>
                                        Price
                                    </span>
                                    <p>
                                        1005.45
                                    </p>
                                </div>
                                <div className={s.currency}>
                                    <p>
                                        USD
                                    </p>
                                </div>
                            </div>
                            <div className={s.choiceSale}>
                                <Put/>
                                <p>
                                    On sale
                                </p>
                            </div>
                            <div className={s.item}>
                                <div className={s.transfer}>
                                    <img src={transfer} alt="icon"/>
                                    <a href="#">Transfer</a>
                                </div>
                                <div className={s.burn}>
                                    <img src={burn} alt="icon"/>
                                    <a href="#">Burn</a>
                                </div>
                            </div>
                        </div>
            }
            { two && <div className={cn(s.choiceMenu, {
                [s.littleBox]: little,
                [s.smallBox]: small,
                [s.middleBox]: middle,
                [s.largeBox]: large
            })}>
                <div className={s.choiceMenu__box}>


                    <div className={s.choiceMenu__put}>
                        <div className={s.put}>
                            <span></span>
                        </div>
                        <a href="#">
                            Put on sale
                        </a>
                    </div>
                    <div className={s.edit}>
                        <img src={pen} alt=""/>
                        <a href="#">
                            Edit
                        </a>
                    </div>
                    <div className={s.transfer}>
                        <img src={transfer} alt=""/>
                        <a href="#">
                            Transfer
                        </a>
                    </div>

                    <div className={s.burn}>
                        <img src={burn} alt=""/>
                        <a href="#">
                            Burn
                        </a>
                    </div>
                </div>
            </div>}
            <div className={s.button}>
                <img src={btnDone} alt="button icon"/>
            </div>
        </div>
    )
}