import React from 'react';
import './Booklist.css';
import BookItem from './BookItem';

class Booklist extends React.Component {
    // this.props.items 

    render() {
        const itemsArr = this.props.items.map((el, index) => {
            const elVol = el.volumeInfo
            const salePrice = (el.saleInfo.retailPrice) ? el.saleInfo.retailPrice.amount : 'Either Free or Unavailable';
            return (
                <li key={index} className="list-item">
                    <BookItem 
                    title={elVol.title} 
                    authors={elVol.authors}
                    salePrice={salePrice} 
                    shortDesc={el.searchInfo.textSnippet}
                    longDesc={elVol.description} 
                    thumbnail={elVol.imageLinks.thumbnail}
                    />
                </li>
            )
        })



        return (
            <ul>
                {itemsArr}
            </ul>
        )
    }
}

export default Booklist;