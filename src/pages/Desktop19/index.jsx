import {Collectible, Header, UserBlock} from "../../components";
import s from './Desktop19.module.scss';

export const Desktop19Page = () => {
    return (
        <div className={s.wrapper}>
            <Header
                btnOne
                btnThree
                btnFour
            />
            <UserBlock />
            <Collectible/>
        </div>
    )
}
