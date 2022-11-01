import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Blockbuster.css';
import { Loading } from '../../LoadingComponent';

const mapStateToProps = (state) => ({
    product: state.product
})

class Blockbuster extends Component {

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
                                if (item.sale_type === 'Blockbuster') {
                                    return (
                                        <div key={item.id}>
                                            <Link to={`/product/${item.id}`} className="blockbuster-item">
                                                <div className="img-container">
                                                    {console.log(item)}
                                                    <img src={item.image} alt="Logo"/>
                                                </div>
                                                <p>{item.name} {item.model}</p>
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

export default connect(mapStateToProps)(Blockbuster);