import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import '../../styles/footer.css';
import Map from '../Map/Map';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <Container>
                <Row>
                    <Col xl="4" md="4">
                        <div className="img">
                            <img className='img-fluid' src={require('../../images/footer_logo.png')} alt="logo" />
                        </div>
                    </Col>
                    <Col xl="4" md="4">
                        <div className="networks__text">
                            <p>Ijtimoiy tarmoqlar</p>
                            <div className="networks">
                                <a href="#"><img src={require('../../images/twitter 1.png')} alt="twitter" /></a>
                                <a href="#"><img src={require('../../images/instagram 1.png')} alt="instagram" /></a>
                                <a href="#"><img src={require('../../images/facebook 1.png')} alt="facebook" /></a>
                                <a href="#"><img src={require('../../images/youtube 1.png')} alt="youtube" /></a>
                            </div>
                        </div>

                        <div className="footer__maps">
                            <i class="ri-map-pin-line"></i>
                            <div className="footer__map-text">
                                <p>Manzil</p>
                                <h3>Buxoro shahar Hokimiyatida :)</h3>
                            </div>
                        </div>

                        <div className="footer__phone">
                            <i class="ri-phone-fill"></i>
                            <div className="footer__phone-text">
                                <p>Murojaat uchun</p>
                                <h3>+998 90 123 4554</h3>
                            </div>
                        </div>
                    </Col>
                    <Col xl="4" md="4" className='maps'>
                        {/* <Map /> */}
                    </Col>
                </Row>
            </Container>
            <div className="footer__end">
                <p>&copy; Barcha huquqlar himoyalangan {year}</p>
            </div>
        </footer>
    );
}

export default Footer;
