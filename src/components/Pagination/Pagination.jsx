import React, {useState, useEffect} from 'react';
import Images from './Images';
import './pagination.css';

const Pagination = () => {

    const [images, setImages] = useState([]);
    const [text, setText] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
        .then(res => res.json())
        .then(data => setImages(data))
        .then(title => setText(title));
    }, []);
    return (
        <>
            <Images data={images} title={text} />
            
        </>
    );
}

export default Pagination;
