import {MenuChoice} from "../index";
import cn from "classnames";
import tiktok from "../../assets/img/userBlock/tiktok.svg";
import instagram from "../../assets/img/userBlock/instagram.svg";
import twitter from "../../assets/img/userBlock/twitter.svg";

import s from './CreateCollectible.module.scss';

export const CreateCollectible = () => {
    return (
        <div className={s.wrapper}>
            <MenuChoice />
            <div className={s.create}>
                <p>
                    Create a Collectible
                </p>
                <div className={cn(s.create__item, s.active)}>
                    <img src={tiktok} alt="tiktok icon"/>
                </div>
                <div className={s.create__item}>
                    <img src={instagram} alt="instagram icon"/>
                </div>
                <div className={s.create__item}>
                    <img src={twitter} alt="twitter icon"/>
                </div>
            </div>
            <div className={s.choose}>
                <div className={cn(s.choose__item, s.active)}>
                        <span>
                            1
                        </span>
                    <p>Choose your content</p>

                </div>
                <div className={s.choose__item}>
                        <span>
                            2
                        </span>
                    <p>Fill description and create</p>

                </div>
            </div>
        </div>
    )
}
