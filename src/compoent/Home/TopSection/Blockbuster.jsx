import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProduct} from '../../../Redux/ActionCreator'
import './Blockbuster.css';
import { Loading } from '../../LoadingComponent';

const mapStateToProps = (state) => ({
    product: state.product
})

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: () => {dispatch(fetchProduct())}
})

class Blockbuster extends Component {

    componentDidMount() {
        this.props.fetchProduct();
      }

    render () {
        const {product} = this.props
        if (product.isLoading) {
            return (
                <section className="blockbuster-loading">
                    <div className="row">
                        <div className="col-12">
                            <div className=""><Loading /></div>
                        </div>
                    </div>
                </section>
            )
        } else if (product.errMess) {
            return(
                <div>{product.errMess}</div>
            )
        }else if (product.product) {
            return (
                <div className="">
                    <section className="blockbuster">
                        <h4>BlockBusters</h4>
                        <div className="blockbuster-content">                    
                            {product.product.map(item => {
                                if (item.category === 'Blockbuster') {
                                    return (
                                        <div key={item.id}>
                                            <Link to={`/product/${item.id}`} className="blockbuster-item">
                                                <img src={item.image} alt="Logo"/>
                                                <p>{item.name}</p>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </section>

                    <section className='blockbuster'>
                        <h4>Flash Sales</h4>
                        <div className="blockbuster-content">
    
                            {product.product.map((item) => {
                                if (item.category === 'Flash Sales') {
                                    return (
                                        <div key={item.id}>
                                            <Link to={`/product/${item.id}`} className="blockbuster-item">
                                                <img src={item.image} alt="Logo"/>
                                                <p>{item.name}</p>
                                                <span className="off">{Math.floor(Math.random() * 10 + 2)}% OFF</span>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </section>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blockbuster);