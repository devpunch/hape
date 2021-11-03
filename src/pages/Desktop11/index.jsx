import {Card, CardBoard, Header, HeaderContent} from "../../components";

import s from './_Desktop11.module.scss';
import instagram from "../../assets/img/instagram.png";
import pivovarov from "../../assets/img/pivovarov.png";
import image5 from "../../assets/img/cartdImage/5.jpg";
import buttonBuy from "../../assets/img/btnBuy.png";
import image1 from "../../assets/img/cartdImage/1.jpg";

export const Desktop11Page = () => {

    return (
        <div className={s.wrapper}>

            <Header
                btnOne
                btnTwo
            />
            <HeaderContent/>
            <CardBoard>
                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image5}
                    btnBuy={buttonBuy}
                    little
                />

                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image5}
                    btnBuy={buttonBuy}
                    little
                />

                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image1}
                    btnBuy={buttonBuy}
                    small
                />
                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image5}
                    btnBuy={buttonBuy}
                    little
                />
            </CardBoard>

        </div>
    )
}

