import React, {useState, useRef, useEffect} from 'react';
import {Container} from 'reactstrap';
import { motion } from 'framer-motion';

import bar from '../../images/bar.png';

const Navbar = () => {
    const headerRef = useRef(null);
    const menuBar = useRef(null);
    const menuBlock = () => menuBar.current.classList.toggle('show');
    const stickyHeaderFunc = () =>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header');
            }else{
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(()=>{
        stickyHeaderFunc();

        return ()=> window.removeEventListener('scroll', stickyHeaderFunc);
    })

    return (
        <>
        <section ref={menuBar} onClick={menuBlock} className="barsNav">salom</section>
            <section className="navbar" ref={headerRef}>
                <Container>
                    <div className="nav" onClick={menuBlock}>
                        <motion.img style={{cursor:'pointer'}} whileTap={{scale:1.1}} src={bar} alt="bar" />
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Navbar;
