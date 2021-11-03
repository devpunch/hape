import s from "./Put.module.scss";
import cn from "classnames";

export const Put = () => {
    return (
        <div className={cn(s.toggle, s.activated)}>
            <span></span>
        </div>
    )
}
