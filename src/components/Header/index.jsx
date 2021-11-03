import logoPng    from '../../assets/img/logo.png';
import btnCreate  from '../../assets/img/btnCreate.png';
import btnLogin   from '../../assets/img/btnLogin.png';
import btnConnect from '../../assets/img/btnConnect.png';
import btnUser    from '../../assets/img/user.png';

import cn from 'classnames';
import s from './Header.module.scss';

export const Header = ({ btnOne, btnTwo, btnThree, btnFour, option}) => {

    return (
        <div className={cn(s.header, {
            [s.active]: option,
        })}>
            <div className={s.container}>
                <div className={s.header__wrap}>
                    <img src={logoPng} alt="logo image"/>
                    <input id="search" type="text" placeholder="Search"/>
                    <a className={s.header__item} href="#">Explore</a>
                    <a className={s.header__item} href="#">How it works</a>
                    <div className={s.header__buttons}>
                        {
                            btnOne && <div className={s.button}>
                                <img src={btnCreate} alt="btn image"/>
                            </div>
                        }
                        {
                            btnTwo && <div className={s.button}>
                                <img src={btnLogin} alt="btn image"/>
                            </div>
                        }
                        {
                            btnThree && <div className={s.button}>
                                <img src={btnConnect} alt="btn image"/>
                            </div>
                        }
                        {
                            btnFour && <div className={s.button}>
                                <img className={s.btnUer} src={btnUser} alt="btn image"/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
