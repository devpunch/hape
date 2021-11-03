import socialIcon from '../../assets/img/tiktok.png';
import userIcon from '../../assets/img/icons/userIcon.png';
import mainImage from '../../assets/img/cartdImage/2.jpg';
import btnBack from '../../assets/img/btns/back.png';
import deActivated from '../../assets/img/btns/deActivated.png';

import {CreateCollectible, Header, Put, UserBlock} from "../../components";
import s from './Desktop21.module.scss'

export const Desktop21Page = () => {
    return (
        <div className={s.wrapper}>
            <Header
                btnOne
                btnThree
                btnFour
            />
            <UserBlock />

            <CreateCollectible />
            <div className={s.inner}>
                <div className={s.createCard}>
                    <div className={s.createCard__links}>
                        <img src={socialIcon} alt="tiktok icon"/>
                        <img src={userIcon} alt="user icon image"/>
                        <p>
                            petemohrbacher
                        </p>
                    </div>
                    <img src={mainImage} alt="card image"/>
                </div>
                <div className={s.description}>
                    <div className={s.description__top}>
                        <div className={s.textarea}>
                            <p>
                                Title
                            </p>
                            <textarea/>
                        </div>
                        <div className={s.nums}>
                            <div className={s.ammount}>
                                <span>
                                    Ammount
                                </span>
                                <p>
                                    1000
                                </p>
                            </div>
                            <div className={s.price}>
                            <span>
                                Price
                            </span>
                                <p>
                                    10
                                </p>
                            </div>
                            <div className={s.currency}>
                                <p>
                                    usd
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.description__bottom}>
                        <p>
                            Description
                        </p>
                        <textarea />
                    </div>
                    <div className={s.put}>
                        <Put />
                        <p>
                            Put on sale
                        </p>
                    </div>


                </div>
            </div>
            <div className={s.buttons}>
                <img src={btnBack} alt="button image"/>
                <img src={deActivated} alt="button image"/>
            </div>


        </div>
    )
}
