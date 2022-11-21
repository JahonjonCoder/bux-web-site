import React, {useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../styles/MurojaatYuborish.css';
import { motion } from 'framer-motion';

export default function MurojaatYuborish() {
    const [firstName, setFirstName] = useState('');
    const [ phone, setPhone] = useState('+998');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [textarea, setTextarea] = useState('');
    return (
        <>
            <Container>
                <Row className='form_row'>
                    <div className="forms">
                        <h2>Buxoro hokimligiga murojaat yuborish</h2>
                        <p>Kengash uchun ariza, taklif, shikoyat va boshqa turdagi murojjatingiz bo'lsa bizga yozing. Murojaatingiz albatta hokimlik tomonidan ko'rib chiqiladi. Tashakkur!</p>
                        <Form>
                            <Col xl="12">
                                <FormGroup>
                                    <Label for='firstName'>FIO<sup>*</sup></Label>
                                    <Input 
                                    type='text' 
                                    id='firstName'
                                    placeholder='Ism Familiya Otasining ismi'
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                     />
                                </FormGroup>
                            </Col>
                            <div className='d-flex gap-2'>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label for='phone'>Telefon<sup>*</sup></Label>
                                        <Input 
                                        autoFocus
                                        type='text' 
                                        id='phone' 
                                        placeholder='+998 |'
                                        value={phone}
                                        onChange={(e)=>setPhone(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label for='email'>E-mail<sup>*</sup></Label>
                                        <Input 
                                        type='phone' 
                                        id='email' 
                                        placeholder='Eshmat1991@gmail.com'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        
                                        />
                                    </FormGroup>
                                </Col>
                            </div>

                            <Col xl="12">
                                <FormGroup>
                                    <Label for='sarlavha'>Murojaat sarlavhasi<sup>*</sup></Label>
                                    <Input 
                                    type='text' 
                                    id='sarlavha' 
                                    placeholder='Mahalla ko‘chalarini asfalt qilish'
                                    value={text}
                                    onChange={(e)=>setText(e.target.value)}
                                    />
                                </FormGroup>
                            </Col> 

                            <Col xl="12">
                                <FormGroup>
                                    <Label for='textarea'>Murojaat sarlavhasi<sup>*</sup></Label><br />
                                    <textarea 
                                    type='text' 
                                    id='textarea' 
                                    placeholder='Bu yerda mavzuga oid kattagina matn bo‘ladi'
                                    value={textarea}
                                    onChange={(e)=>setTextarea(e.target.value)}
                                    />
                                </FormGroup>
                            </Col> 

                                    
                            <Col xl='12' >
                                <h4 className='footers__txt'>Mavzuga oid fayl</h4>
                                <div className='footers'>
                                    <div className="files">    
                                        <label htmlFor="file"><img src={require('../../images/file.png')}/> <span>Faylni tanlang</span> </label>
                                        <Input type='file' id='file' className='file' />
                                    </div>
                                    <motion.button whileTap={{scale:1.1}} type='submit'>Murojjatni yuborish</motion.button>
                                </div>
                            </Col>

                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
