import {Card, CardActivated, Header, UserBlock, UserBoard} from "../../components";
import s from './_Desctop9.module.scss';
import instagram from "../../assets/img/instagram.png";
import pivovarov from "../../assets/img/pivovarov.png";
import image5 from "../../assets/img/cartdImage/5.jpg";
import buttonBuy from "../../assets/img/btnBuy.png";
import image1 from "../../assets/img/cartdImage/1.jpg";
import image2 from "../../assets/img/cartdImage/2.jpg";

export const Desktop9Page = () => {
    return (
        <div className={s.wrapper}>
            <Header
                btnOne
                btnThree
                btnFour
            />
            <UserBlock />
            <UserBoard>
                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image5}
                    btnBuy={buttonBuy}
                    little
                >
                    <CardActivated
                        little
                        two
                    />
                </Card>

                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image5}
                    btnBuy={buttonBuy}
                    small
                >
                    <CardActivated
                        small
                        one
                    />
                </Card>

                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image5}
                    btnBuy={buttonBuy}
                    middle
                >
                    <CardActivated
                        middle
                        one
                    />
                </Card>

                <Card
                    name="pivovarov"
                    socialNetwork={instagram}
                    avatar={pivovarov}
                    text="Редакция Ньюс, v236"
                    price="1,400"
                    mainImg={image5}
                    btnBuy={buttonBuy}
                    large
                >
                    <CardActivated
                        large
                        two
                    />
                </Card>

            </UserBoard>
        </div>
    )
}
