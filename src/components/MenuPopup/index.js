
import tiktokBig from '../../assets/img/TikTokBig.png';
import instagramBig from '../../assets/img/instagramBig.png';
import twitterBig from '../../assets/img/twitterBig.png';

import closeBtn from '../../assets/img/closeIcon.svg';
import s from './MenuPopup.module.scss';
import {MenuPopup2} from "../index";

export const MenuPopup = () => {



    return (
        <div className={s.wrapper}>
            <img className={s.closeBtn} src={closeBtn} alt="close icon"/>
            <div className={s.inner}>
                <span>Connect to</span>
                <h6 className={s.title}>HYPEFACTORY</h6>
            </div>
            <p className={s.text}>
                To let us automatically create an account for you continiue with any of your social media
            </p>
            <div className={s.social}>
                <div className={s.item}>
                    <img src={tiktokBig} alt="tiktok icon"/>
                    <a href="#">TikTok</a>
                </div>
                <div className={s.item}>
                    <img src={instagramBig} alt="instagram icon"/>
                    <a href="#">Instagram</a>
                </div>
                <div className={s.item}>
                    <img src={twitterBig} alt="twitter icon"/>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </div>
    )
}
