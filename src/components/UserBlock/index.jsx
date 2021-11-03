import Icon from '../../assets/img/icons/Icons.svg';
import btnAdd from '../../assets/img/btns/addFunds.png';
import btnWith from '../../assets/img/btns/withdraw.png';
import userImg from '../../assets/img/userIcon.png';
import tiktok from '../../assets/img/userBlock/tiktok.svg';
import instagram from '../../assets/img/userBlock/instagram.svg';
import twitter from '../../assets/img/userBlock/twitter.svg';
import btnManage from '../../assets/img/btns/manageSocials.png';
import btnDown from '../../assets/img/btns/downloads.png';
import subIcon from '../../assets/img/icons/sub.svg';

import s from './UserBlock.module.scss';

export const UserBlock = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.shadow}></div>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.prices}>
                        <div className={s.prices__block}>
                            <img src={Icon} alt="icon image"/>
                            <div className={s.prices__firstPrice}>
                                <span>
                                    BALANCE
                                </span>
                                <p>
                                    1,400
                                    <sub>$</sub>
                                </p>
                            </div>
                            <div className={s.prices__secondPrice}>
                                <p>
                                    1,256
                                    <img src={subIcon} alt=""/>
                                </p>
                            </div>
                        </div>
                        <div className={s.prices__buttons}>
                            <img src={btnAdd} alt="button icon"/>
                            <img src={btnWith} alt="button icon"/>
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <img src={userImg} alt="user icon image"/>
                        <p>
                            petemohrbacher
                        </p>
                        <div className={s.social}>
                            <img src={tiktok} alt="tiktok icon"/>
                            <img src={instagram} alt="instagram icon"/>
                            <img src={twitter} alt="twitter icon"/>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <img src={btnManage} alt="button image"/>
                        <img src={btnDown} alt="button image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
