import {Card, Header, MenuChoice, MenuPopup2, UserBlock} from "../../components";
import tiktok from "../../assets/img/tiktok.png";
import senbentino from "../../assets/img/senbentino.png";
import image4 from "../../assets/img/cartdImage/4.jpg";
import buttonWrite from "../../assets/img/btns/write.png";
import itemTiktok from "../../assets/img/icons/bigSocialIcon/tiktok.png";
import itemTwitter from "../../assets/img/icons/bigSocialIcon/twitter.png";
import itemFacebook from "../../assets/img/icons/bigSocialIcon/facebook.png";
import itemInstagram from "../../assets/img/icons/bigSocialIcon/instagram.png";
import itemTelegram from "../../assets/img/icons/bigSocialIcon/telegram.png";
import copy from "../../assets/img/icons/copy.svg";
import scissors from "../../assets/img/icons/scissors.svg";
import btnCreateAnother from "../../assets/img/btns/createAnother.png";
import s from './Desktop27Page.module.scss';

export const Desktop27Page = () => {
    return (
        <div className={s.wrapper}>
            {/*<MenuPopup2*/}
            {/*    card={false}*/}
            {/*    progress={false}*/}
            {/*    succesFull={false}*/}
            {/*    wrong={false}*/}
            {/*    userMenu={false}*/}
            {/*    socialMenu={false}*/}
            {/*/>*/}
            <Header
                btnOne
                btnThree
                btnFour
            />
            <UserBlock />
            <div className={s.container}>
                <MenuChoice />
                <p className={s.title}>
                    Congrats! You’re all set!
                </p>
                <div className={s.inner}>
                    <Card
                        name="senbentino"
                        socialNetwork={tiktok}
                        avatar={senbentino}
                        text="Osaka Castle"
                        price="1,400"
                        mainImg={image4}
                        btnBuy={buttonWrite}
                        small
                    />
                    <div className={s.social}>
                        <p>
                            Share your work to social media
                        </p>
                        <div className={s.social__items}>
                            <div className={s.social__item}>
                                <img src={itemTiktok} alt="TikTok icon"/>
                                <a href="#">TikTok</a>
                            </div>
                            <div className={s.social__item}>
                                <img src={itemTwitter} alt="Twitter icon"/>
                                <a href="#">Twitter</a>
                            </div>
                            <div className={s.social__item}>
                                <img src={itemFacebook} alt="Facebook icon"/>
                                <a href="#">Facebook</a>
                            </div>
                            <div className={s.social__item}>
                                <img src={itemInstagram} alt="Instagram icon"/>
                                <a href="#">Instagram</a>
                            </div>
                            <div className={s.social__item}>
                                <img src={itemTelegram} alt="Telegram icon"/>
                                <a href="#">Telegram</a>
                            </div>
                        </div>
                        <div className={s.another}>
                            <p>
                                or
                            </p>
                            <img src={copy} alt="copy icon"/>
                            <a href="#">
                                Copy item link
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.cut}>
                    <img src={scissors} alt="scissors icon"/>
                    <p></p>
                </div>
                <div className={s.button}>
                    <img src={btnCreateAnother} alt="button image"/>
                    <div className={s.button__link}>
                        <p>
                            or
                        </p>
                        <a href="#">
                            Proceed to your page
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
