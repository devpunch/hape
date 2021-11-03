import {MenuChoice} from "../index";
import bigCreate from "../../assets/img/btns/createBig.png";
import s from './UserBoard.module.scss';

export const UserBoard = ({children}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <MenuChoice />
                <div className={s.inner}>
                    <div className={s.innerBoard}>
                        {children}
                    </div>
                </div>
                <div className={s.create}>
                    <img src={bigCreate} alt="button image"/>
                </div>
            </div>
        </div>
    )
}
