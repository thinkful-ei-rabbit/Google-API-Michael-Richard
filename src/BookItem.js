import React from 'react';

class BookItem extends React.Component {
    state = {
        displayed: false
    }

    handleShowChange = () => {
        this.setState({displayed: !this.state.displayed})
    }

    render() {
        
        return (
            <div>
                <div>
                    <h3>{this.props.title}</h3>
                </div>
                <div className="list-item-box">
                    <img src={this.props.thumbnail} alt="Placeholder" />
                    <div className="list-item-nested-box">
                        <h5>
                            Authors:{this.props.authors}
                        </h5>
                        <h6>Price:{this.props.salePrice}</h6>
                        <div>
                            {
                            (this.state.displayed) 
                               ?  (
                                   <div>
                                        <p>{this.props.longDesc}</p>
                                        <button onClick={this.handleShowChange}>Show Less</button>
                                   </div>
                               )
                               : (
                                   <div>
                                       <p>{this.props.shortDesc}</p>
                                       <button onClick={this.handleShowChange}>Show More</button>
                                    </div>
                               )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookItem;