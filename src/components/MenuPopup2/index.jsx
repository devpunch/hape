import {Put} from "../index";

import closeBtn from '../../assets/img/closeIcon.svg';
import btnDeposit from '../../assets/img/btns/deposit.png';
import checkout from '../../assets/img/icons/checkout.svg';
import warning from '../../assets/img/icons/warning.svg';
import arrowLeft from '../../assets/img/icons/arrow-left.svg';
import avatar from '../../assets/img/avatars/50/avatar1.png';
import icon from '../../assets/img/icons/Icons.svg';
import dollarImage from '../../assets/img/icons/sub.svg';
import cardLeft from '../../assets/img/btns/cardLeft.png';
import cardRight from '../../assets/img/btns/cardRight.png';
import tiktok from '../../assets/img/userBlock/tiktok.svg';
import twitter from '../../assets/img/userBlock/twitter.svg';
import instagram from '../../assets/img/userBlock/instagram.svg';
import s from './Menupopup2.module.scss';


export const MenuPopup2 = ({card, progress, succesFull, wrong, userMenu, socialMenu}) => {

    return (
        <div className={s.wrapper}>
            <img className={s.closeBtn} src={closeBtn} alt="close icon"/>
            {socialMenu && <img className={s.arrow} src={arrowLeft} alt="arrow icon"/>}
            { card && <div className={s.box}>
                <div className={s.info}>
                    <p>
                        Add funds
                    </p>
                    <div className={s.amount}>
                        <span>
                            Ammount
                        </span>
                        <i>
                            1000
                        </i>
                    </div>
                </div>
                <div className={s.cardInfo}>
                    <form className={s.formMain}>
                        <label htmlFor="name" className={s.inputName}>
                            <span>
                                Cardholder
                            </span>
                            <input id="name" type="text" placeholder="NAME SURNAME"/>
                        </label>
                        <label htmlFor="num" className={s.inputCardNumber}>
                            <span>
                                Card number
                            </span>
                            <input id="num" type="text" placeholder="0000 0000 0000 0000"/>
                        </label>
                        <div className={s.cardInfoNums}>

                            <p>
                                VALID THRU
                            </p>
                            <label htmlFor="month" className={s.month}>
                                <p>
                                    Month
                                </p>
                                <input id="month" type="text" placeholder="00"/>
                            </label>
                            <label htmlFor="year" className={s.year}>
                                <p>
                                    Year
                                </p>
                                <input id="year" type="text" placeholder="2021"/>
                            </label>
                        </div>

                    </form>
                    <form className={s.formBackSide}>
                        <div className={s.tape}></div>
                        <label htmlFor="ccv" className={s.security}>
                            <span>
                                CCV
                            </span>
                            <input id="ccv" type="text" placeholder="000"/>
                        </label>
                    </form>
                </div>
                <div className={s.button}>
                    <img src={btnDeposit} alt="button image"/>
                </div>
            </div>}
            { progress && <div className={s.progress}>
                <p>
                    Transaction in progress
                </p>

                <div className={s.loader}></div>
                <span>
                    Please wait
                </span>
            </div>}
            { succesFull && <div className={s.succesFull}>
                <p>
                    Transaction succesfull
                </p>
                <img src={checkout} alt="checked icon"/>
            </div> }
            { wrong && <div className={s.wrong}>
                <p>
                    Something went wrong
                </p>
                <img src={warning} alt=""/>
                <a href="#">Please try again</a>
            </div>}
            { userMenu && <div className={s.userMenu}>

                <div className={s.userMenu__wrap}>
                    <img src={avatar} alt="avatar image"/>
                    <p>
                        Username007
                    </p>
                </div>
                <div className={s.userMenu__inner}>
                    <img src={icon} alt="icon image"/>
                    <div className={s.block}>
                        <div className={s.balance}>
                            <p>
                                BALANCE
                            </p>
                            <span>
                                <sup>
                                    $
                                </sup>
                                650,420
                                <sup>
                                    .56
                                </sup>
                            </span>
                        </div>
                        <div className={s.prices}>
                            <img src={dollarImage} alt="icon image"/>
                            <p>
                                1,256
                            </p>
                        </div>
                        <div className={s.buttons}>
                            <img src={cardLeft} alt="button image"/>
                            <img src={cardRight} alt="button image"/>
                        </div>
                        <div className={s.listMenu}>
                            <a href="#">Edit profile</a>
                            <a href="#">Manage Items</a>
                            <a href="#">Manage Socials</a>
                            <a href="#">Log out</a>
                        </div>

                    </div>

                </div>

            </div>}
            { socialMenu && <div className={s.socialMenu}>
                <p>
                    Manage Socials
                </p>
                <div className={s.socialList}>
                    <div className={s.socialList__item}>
                        <div className={s.socialList__link}>
                            <img src={tiktok} alt="Tiktok icon"/>
                            <a href="#">Tiktok</a>
                        </div>
                        <div className={s.disconnect}>
                            <p>
                                Disconnect
                            </p>
                            <Put/>
                        </div>
                    </div>
                    <div className={s.socialList__item}>
                        <div className={s.socialList__link}>
                            <img src={instagram} alt="Instagram icon"/>
                            <a href="#">Instagram</a>
                        </div>
                        <div className={s.disconnect}>
                            <p>
                                Disconnect
                            </p>
                            <Put/>
                        </div>
                    </div>
                    <div className={s.socialList__item}>
                        <div className={s.socialList__link}>
                            <img src={twitter} alt="Twitter icon"/>
                            <a href="#">Twitter</a>
                        </div>
                        <div className={s.disconnect}>
                            <p>
                                Disconnect
                            </p>
                            <Put/>
                        </div>
                    </div>
                </div>
                <div className={s.other}>
                    <div className={s.plus}>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#">
                        Connect other
                    </a>
                </div>
            </div>}
        </div>
    )
}

