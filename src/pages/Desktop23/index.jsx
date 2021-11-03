import {CardInfo, Header} from "../../components";
import s from './_Desctop23.module.scss';

export const Desktop23Page = () => {
    return (
        <div className={s.wrapper}>
            <Header
                btnOne
                btnThree
                btnFour
                option
            />
            <CardInfo />
        </div>
    )
}
