import React, {useState, useEffect} from 'react';
import Images from './Images';
import './pagination.css';

const Pagination = () => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums/')
        .then(res => res.json())
        .then(data => setImages(data));
    }, []);
    return (
        <>
            <Images data={images} />
        </>
    );
}

export default Pagination;
