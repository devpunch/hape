import {Available, AvailableLittle} from "../index";
import cardInfoImage from '../../assets/img/cardInfoImage.jpg';
import avatar from '../../assets/img/pivovarov.png';
import instagram from '../../assets/img/instagram.png';
import btnBuyBig from '../../assets/img/btnBuyBig.png';
import btnBuyLittle from '../../assets/img/btnBuyLittle.png';
import avatar1 from '../../assets/img/listAvatar/1.png';
import s from './CardInfo.module.scss';


export const CardInfo = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.mainImage}>
                        <img src={cardInfoImage} alt="card image"/>
                    </div>
                    <div className={s.info}>
                        <div className={s.info__block}>
                            <div className={s.descr}>
                                <div className={s.social}>
                                    <img src={instagram} alt="instagram icon"/>
                                    <img src={avatar} alt="avatar icon"/>
                                    <a href="#">
                                        petemohrbacher
                                    </a>
                                </div>
                                <p className={s.descr__info}>
                                    Raziel, Angel of Mysteries
                                </p>
                            </div>
                            <div className={s.nums}>
                                <Available />
                                <img src={btnBuyBig} alt="button icon"/>
                            </div>
                        </div>

                        <p className={s.text}>
                            I watched as the clouds poured forth from the mouth of the opening. The sky on the other side leaked through to flow down into the valley below, filling nothing of the infinite void that waited below it. Compared to this great emptiness, the stream might as well have been fed through the eye of a needle, for it accomplished the same. Even so, it regarded the world openly and boldly.
                        </p>
                        <div className={s.menuChoice}>
                            <p className={s.active}>
                                Owners
                                <sub>
                                    17
                                </sub>
                            </p>
                            <p>
                                History
                            </p>
                        </div>
                        <div className={s.list}>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                            <div className={s.list__item}>
                                <div className={s.list__name}>
                                    <img src={avatar1} alt="avatar image"/>
                                    <p>
                                        Anxiety Society Art
                                    </p>
                                </div>
                                <div className={s.box}>
                                    <AvailableLittle />
                                    <img src={btnBuyLittle} alt="button icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
