import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Images = (props) => {
    const { data, text } = props;

    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 6;

    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
      };

   
  
    return (
      <>
        <div className='images'>
            {currentItems.map(image=>(
                <div className="image">
                  <h1>{image.id}</h1>
                    <img src={image.url} alt={image.title} />
                    <p>{image.title}</p>
                </div>
            ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </>
    );
}

export default Images;

