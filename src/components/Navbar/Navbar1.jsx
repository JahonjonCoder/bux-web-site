import React, {useState} from 'react';
import {Container, Row, Col, Form, Card} from 'reactstrap';
import './Navbar.css';
import logo from '../../images/gerb.png';

const Navbar1 = () => {

    const [search, setSearch] = useState('')

    return (
        <div>
            <section className="navbar__top">
                <Container>
                    <Row>
                        <div className="navbar__row">
                            <Col xl="4" md="6" className='d-flex alifn-items-center gap-2'>
                                <Card>
                                    <a href="#">
                                        <div className="navbar__top-img">
                                            <img src={logo} alt="gerb" className='img-fluid' />
                                        </div>
                                    </a>
                                </Card>
                            </Col>
                            <Col xl="4" md="6">
                                <Card>
                                    <Form className='navbar__form'>
                                        <i class="ri-search-line"></i>
                                        <input 
                                        type="search" 
                                        placeholder='Qidiruv tizimi'
                                        value={search}
                                        onChange={(e)=> setSearch(e.target.value)}
                                        />
                                    </Form>
                                </Card>
                            </Col>
                            <Col xl="4" md="6">
                                <Card>
                                    <div className="navbar__icons">      
                                        <div className="map">
                                            <i class="ri-map-pin-line"></i>
                                            <div className="map__text">
                                                <p>Manzil</p>
                                                <strong>Xaritadan ko'rish</strong>
                                            </div>
                                        </div>
                                        <div className="phone">
                                            <i class="ri-phone-line"></i>
                                            <div className="phone__text">
                                                <p>Murojaat uchun</p>
                                                <strong>90 123 4554</strong>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Card>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Navbar1;
