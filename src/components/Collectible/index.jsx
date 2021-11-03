import {CollectibleCard, CreateCollectible, Header, MenuChoice} from "../index";
import Image1 from '../../assets/img/cartdImage/2.jpg';
import proceed from '../../assets/img/btns/PROCEED.png';
import s from './Collectible.module.scss';


export const Collectible = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>

                <CreateCollectible />

                <div className={s.inner}>
                    <div className={s.list}>
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                        <CollectibleCard
                            mainImg={Image1}
                            little
                        />
                        <CollectibleCard
                            mainImg={Image1}
                            large


                        />
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                        <CollectibleCard
                            mainImg={Image1}
                            small
                            isActive

                        />
                    </div>
                </div>
            </div>
            <div className={s.button}>
                <img src={proceed} alt="button image"/>
            </div>
        </div>
    )
}