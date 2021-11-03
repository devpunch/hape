import cn from "classnames";
import s from "./MenuChoice.module.scss";

export const MenuChoice = () => {
    return (
        <div className={s.menuChoice}>
            <div className={cn(s.menuChoice__item)}>
                <p>
                    On sale
                    <sub>3</sub>
                </p>
            </div>
            <div className={cn(s.menuChoice__item, s.active)}>
                <p>
                    Collection
                    <sub>3</sub>
                </p>
            </div>
            <div className={s.menuChoice__item}>
                <p>
                    Created
                    <sub>3</sub>
                </p>
            </div>
        </div>
    )
}
