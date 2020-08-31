import React from 'react';
import './Booklist.css';

class Booklist extends React.Component {
    // this.props.items 

    render() {
        const itemsArr = this.props.items.map((el, index) => {
            const elVol = el.volumeInfo
            const salePrice = (el.saleInfo.retailPrice) ? el.saleInfo.retailPrice.amount : 'Either Free or Unavailable';
            return (
                <li key={index} className="list-item">
                    <div>
                        <h3>{elVol.title}</h3>
                    </div>
                    <div className="list-item-box">
                        <img src={elVol.imageLinks.thumbnail} alt="Placeholder" />
                        <div className="list-item-nested-box">
                            <h5>
                                Authors:{elVol.authors}
                            </h5>
                            <h6>Price:{salePrice}</h6>
                            <div>
                                {elVol.description}
                            </div>
                        </div>
                    </div>
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