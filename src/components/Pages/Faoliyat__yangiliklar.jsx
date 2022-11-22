import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Paginations from '../Pagination/Pagination';
import '../../styles/Faoliyat__yangiliklar.css';

const Faoliyat__yangiliklar = () => {
  return (
    <>
        <Container>
            <Row>
                <Col md="4">
                    <div className="activityNews">
                        <h3 className="thema__links">Faoliyat</h3>
                        <ul>
                            <li><a href="#">Statistika va tahliliy axborotlar</a></li>
                            <li><a href="#">Yangiliklar</a></li>
                            <li><a href="#">E’lon va tenderlar</a></li>
                            <li><a href="#">Rasmiy ma’ruzalar</a></li>
                            <li><a href="#">Tadbirlar</a></li>
                            <li><a href="#">Fotogalereya</a></li>
                            <li><a href="#">Videogalereya</a></li>
                            <li><a href="#">Sayyor qabullar</a></li>
                            <li><a href="#">Aholi bandligini ta’minlash</a></li>
                            <li><a href="#">Rasmiy munosabat</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md="8">
                    <Paginations />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Faoliyat__yangiliklar