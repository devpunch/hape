import s from './Cards.module.scss';

export const CardBoard = ({children}) => {
    return (
        <div className={s.mainWrap}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    {children}
                </div>
            </div>
            <div className={s.shadow}> </div>
        </div>
    )
}

