import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Pagination } from 'reactstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../styles/home.css';
import products from '../../data/products';
import { motion } from 'framer-motion';
import { Carousel } from '@sefailyasoz/react-carousel';
import Paginations from '../Pagination/Pagination';


import Button from '../button/button';
import Swiper1 from '../Swipers/Swiper1';

const Home = () => {
    const CarouselData = [
        {
          headerText: null,
          subText: 'Sub Text One',
          image: 'https://picsum.photos/300/300',
        },
        {
          headerText: 'Header Text Two',
          subText: null,
          image: 'https://picsum.photos/1200/800',
        },
        {
          headerText: null,
          subText: null,
          image: 'https://picsum.photos/720/720',
        },
        {
          headerText: 'Header Text Four',
          subText: 'Sub Text Four',
          image: 'https://picsum.photos/1920/1080',
        },
        {
          headerText: 'Header Text Five',
          subText: 'Sub Text Five',
          image: 'https://picsum.photos/480/360',
        },
      ];
    const [tab, setTab] = useState('');

    function likeCLick(){
        if(tab === 'desc'){
            setTab('desc');
            window.document.querySelector('.like__btn').classList.add('active__tab1');
        }else{
            window.document.querySelector('.like__btn').classList.remove('active__tab1');
        }
    }

    const styles1 = {
        border: 'none',
        backgroundColor: "#0F62FE",
        padding: '15px 35px',
        color: "#fff"
    };

    const styles2 = {
        border: '1px solid #fff',
        backgroundColor: 'transparent',
        padding: '15px 40px',
        color: "#fff",

    };

    const yang = [
        {
            id:1,
            'text':"Buvayda tumani markazida zamonaviy avtoturargoh qurish toʼgʼrisida",
            'paragrf':"Buvayda tumani fuqarolari va tumanga tashrif buyuruvchi mehmonlar tuman markaziga biror bir ish bilan avtotransport vositasida kelsa, transport vositasi toʼxtab turishi uchun hech qanday maxsus ajratilganjoy mavjud emas. Аmmo kiyim-kechak bozoriga, koʼkat bozoriga yoki kirish"
        },
        {
            id:2,
            'text':"Buvayda tumani markazida zamonaviy avtoturargoh qurish toʼgʼrisida",
            'paragrf':"Buvayda tumani fuqarolari va tumanga tashrif buyuruvchi mehmonlar tuman markaziga biror bir ish bilan avtotransport vositasida kelsa, transport vositasi toʼxtab turishi uchun hech qanday maxsus ajratilganjoy mavjud emas. Аmmo kiyim-kechak bozoriga, koʼkat bozoriga yoki kirish"
        },
        {
            id:3,
            'text':"Buvayda tumani markazida zamonaviy avtoturargoh qurish toʼgʼrisida",
            'paragrf':"Buvayda tumani fuqarolari va tumanga tashrif buyuruvchi mehmonlar tuman markaziga biror bir ish bilan avtotransport vositasida kelsa, transport vositasi toʼxtab turishi uchun hech qanday maxsus ajratilganjoy mavjud emas. Аmmo kiyim-kechak bozoriga, koʼkat bozoriga yoki kirish"
        },
                {
            id:4,
            'text':"Buvayda tumani markazida zamonaviy avtoturargoh qurish toʼgʼrisida",
            'paragrf':"Buvayda tumani fuqarolari va tumanga tashrif buyuruvchi mehmonlar tuman markaziga biror bir ish bilan avtotransport vositasida kelsa, transport vositasi toʼxtab turishi uchun hech qanday maxsus ajratilganjoy mavjud emas. Аmmo kiyim-kechak bozoriga, koʼkat bozoriga yoki kirish"
        }
    ];

    return (
        <>
            <section className="home">
                <div className="bg"></div>
                <Container>
                    <Row>
                        <div className="home__content">
                            <Col lg="5">
                                <h1>Buxoro viloyati hokimligi</h1>
                                <h2>rasmiy veb sahifasiga xush kelibsiz!</h2>
                                <div className="home__btns d-flex align-items-center gap-3 mt-5">
                                    <Button styles={styles1} title="Murojaat yuborish" />
                                    <Button styles={styles2} title="so'ngi yangiliklar" />
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className="news mt-5">
                <Container>
                    <Row>
                        <Col lg="8">
                            <h2 className="thema">
                                So‘nggi yangiliklar
                            </h2>
                            <Row>
                                <Col lg='12 mb-3'>
                                    <div className="mews__img">
                                        <img src={require('../../images/news-1.png')} alt="" />
                                        <div className="img__text">
                                            <div className="txt">
                                                <div className="calendar">
                                                    <i class="ri-calendar-line"></i>
                                                </div>
                                                <p>«Imtiyozlarga qurilgan koshona». Hyatt Regency endi uchdan bir narxiga ...</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='6'>
                                    <Card>
                                        <div className="mews__img12">
                                            <img src={require('../../images/news-2.png')} alt="" />
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg='6'>
                                    <Card>
                                        <div className="mews__img12">
                                            <img src={require('../../images/news-3.png')} alt="" />
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg="4">
                            <h4 className='thema__link'>Barcha yangiliklar</h4>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="questionarie" >
                <Container>
                    <h2 className="thema mb-4">So'rovnomalar</h2>
                    <Row>
                        {
                            yang.map(index=>(

                            <Col lg='6' md='6' className='mb-3' key={index.id}>
                                <Card className='bg-white'>
                                    <h3>{index.text}</h3>
                                    <p>{index.paragrf}</p>
                                    <div className="card__footer d-flex align-items-center justify-content-between">
                                        <div className="aftor">
                                            Muallif: <span>Hoshimjon Turob</span>
                                        </div>
                                        <div className="footer__btn">
                                            <motion.button
                                                className="like__btn"
                                                // className={`${tab === 'desc' ? 'active__tab1' : ''}`}
                                                onClick={likeCLick} whileTap={{ scale: 1.1 }}>
                                                <i class="ri-thumb-up-line"></i><span>{123}</span>
                                            </motion.button>
                                            <motion.button
                                                whileTap={{ scale: 1.1 }}
                                                // className={`${tab === 'rev' ? 'active__tab' : ''}`}
                                                onClick={() => setTab('rev')}
                                            >
                                                <i class="ri-thumb-down-line"></i><span>{123}</span>
                                            </motion.button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            ))
                        }

                      

                    </Row>
                </Container>
            </section>

            <section className="tranders">
                <Container>
                    <h2 className="thema mb-5">E’lonlar va tenderlar</h2>
                    <Row>
                        <Col lg="8" md="6">
                            <div className="tranders__cards">
                                <div className="cards">
                                    <div className="cards__img-text">
                                        <div className="imgs"></div>
                                        <p>Bugun 20.11.2022 soat 15:30 da Buxoro yoshlar markazida tadbir </p>
                                    </div>
                                    <h6>Tadbirning asosiy mehmoni Muhammadali Eshonqulov bo‘lib, “Yoshlarni bilimga yetaklash” mavzusida suhbat olib boriladi</h6>
                                </div>

                                <div className="cards">
                                    <div className="cards__img-text">
                                        <div className="imgs"></div>
                                        <p>Bugun 20.11.2022 soat 15:30 da Buxoro yoshlar markazida tadbir </p>
                                    </div>
                                    <h6>Tadbirning asosiy mehmoni Muhammadali Eshonqulov bo‘lib, “Yoshlarni bilimga yetaklash” mavzusida suhbat olib boriladi</h6>
                                </div>

                                <div className="cards">
                                    <div className="cards__img-text">
                                        <div className="imgs"></div>
                                        <p>Bugun 20.11.2022 soat 15:30 da Buxoro yoshlar markazida tadbir </p>
                                    </div>
                                    <h6>Tadbirning asosiy mehmoni Muhammadali Eshonqulov bo‘lib, “Yoshlarni bilimga yetaklash” mavzusida suhbat olib boriladi</h6>
                                </div>

                                <div className="cards">
                                    <div className="cards__img-text">
                                        <div className="imgs"></div>
                                        <p>Bugun 20.11.2022 soat 15:30 da Buxoro yoshlar markazida tadbir </p>
                                    </div>
                                    <h6>Tadbirning asosiy mehmoni Muhammadali Eshonqulov bo‘lib, “Yoshlarni bilimga yetaklash” mavzusida suhbat olib boriladi</h6>
                                </div>

                                <div className="cards">
                                    <div className="cards__img-text">
                                        <div className="imgs"></div>
                                        <p>Bugun 20.11.2022 soat 15:30 da Buxoro yoshlar markazida tadbir </p>
                                    </div>
                                    <h6>Tadbirning asosiy mehmoni Muhammadali Eshonqulov bo‘lib, “Yoshlarni bilimga yetaklash” mavzusida suhbat olib boriladi</h6>
                                </div>

                                <div className="cards">
                                    <div className="cards__img-text">
                                        <div className="imgs"></div>
                                        <p>Bugun 20.11.2022 soat 15:30 da Buxoro yoshlar markazida tadbir </p>
                                    </div>
                                    <h6>Tadbirning asosiy mehmoni Muhammadali Eshonqulov bo‘lib, “Yoshlarni bilimga yetaklash” mavzusida suhbat olib boriladi</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6">
                            <div className="tranders__progress">
                                <h4>Ishonch telefoni</h4>
                                <div className="tranders__phone">
                                    <i class="ri-phone-line"></i>
                                    <p>+998 90 897 1221</p>
                                </div>
                                <p className="tranders__paragrf">
                                    Ish tartibi Dushanbadan shanbagacha 08:00-21:30
                                </p>
                                <p className="tranders__sound">Ishonch telefoniga berilgan ovozlar</p>
                                <div className="sound__lineBar">
                                    <p>5 baho (1557)  81%</p>
                                    <ProgressBar now={81} />
                                </div>

                                <div className="sound__lineBar">
                                    <p>4 baho (132)  7%</p>
                                    <ProgressBar now={7} />
                                </div>

                                <div className="sound__lineBar">
                                    <p>3 baho (151)  8%</p>
                                    <ProgressBar now={8} />
                                </div>

                                <div className="sound__lineBar">
                                    <p>2 baho (69)  4%</p>
                                    <ProgressBar now={4} />
                                </div>

                                <div className="sound__lineBar">
                                    <p>1 baho (0)  0%</p>
                                    <ProgressBar now={1} />
                                </div>
                            </div>
                            <div className="tranders__btn">
                                <motion.button whileTap={{ scale: 1.1 }}><i class="ri-mail-line"></i> <span>Elektron murojaat</span></motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<i class="ri-arrow-left-line"></i>}
              leftItem={<i class="ri-arrow-right-line"></i>}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            /> */}
            <section className='projects'>
                <Container>
                    <h2 className='thema'>Loyihalar</h2>
                </Container>
                <Container>
                    <Swiper1 />
                    <Swiper1 />
                </Container>

            </section>
        </>
    )
}

export default Home;