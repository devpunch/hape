import btnCreateColl from '../../assets/img/btnCreateColl.png';

import elemBlue from '../../assets/img/elemBlue.png';
import elemPurple from '../../assets/img/elemPurple.png';
import elemYellow from '../../assets/img/elemYellow.png';
import hypeFactory from '../../assets/img/HYPEFACTORY.png';
import s from './HeaderContent.module.scss';

export const HeaderContent = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2 className={s.title}>
                    HYPEFACTORY
                </h2>
                <img className={s.hypeFactory} src={hypeFactory} alt=""/>
                <p className={s.text}>
                    NFTs for Everyone
                </p>
                <h3 className={s.subtitle}>
                    Trading content made simple
                </h3>
                <p className={s.subtext}>
                    Create Collectibles from your Instagram post, Tiktok videos or Tweets, and allow your fans to buy them as easy as a pie!
                </p>
                <div className={s.variations}>
                    <img src={btnCreateColl} alt="button icon"/>
                    <p>
                        or <a className={s.variations__account} href="#">Log in / Create Account</a>
                    </p>
                </div>
                <img className={s.elemBlue} src={elemBlue} alt="elem image"/>
                <img className={s.elemPurple} src={elemPurple} alt="elem image"/>
                <img className={s.elemYellow} src={elemYellow} alt="elem image"/>
            </div>
        </div>
    )
}

