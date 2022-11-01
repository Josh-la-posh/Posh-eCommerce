import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchProduct} from '../../Redux/ActionCreator';
import './Phone&Tablet.css'
import BottomSection from '../Home/BottomSection/BottomSection';

const mapStateToProps = (state) => ({
    product: state.product.product
})

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: () => {dispatch(fetchProduct())}
})

class Electronics extends Component {

    componentDidMount() {
        this.props.fetchProduct()
    }
    
    render(){
        const {product} = this.props
    
        return (
            <div className="market-content">
                <div className="container">
                    <div className="breadcrumb">

                        {/* BREADCRUMB */}

                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem className='bread-2'>
                                <Link to=''>Electronics</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    {/* PAGE HEADING */}
                    <div className="page-heading text-center p-2 mb-4">Electronics</div>

                    {/* LIMITED STOCK DEALS */}
                    <div className="blockbuster-2 mb-4 pb-2">
                        <p className='sub-heading p-2 bg-2'>Limited Stock Deals</p>
                        <div className="blockbuster-content">
                            {product.map(item => {
                                if (item.sale_type === 'Limited Stock' && item.category === 'Electronics') {
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
                    </div>

                    <div className="blockbuster-2 mb-4">
                        <div className="row p-2">
                            <div className="col-4">
                                <img src="../../../images/product/phones&tablet/andriod.png" alt="" />
                            </div>
                            <div className="col-4">
                                <img src="../../../images/product/phones&tablet/iphone.png" alt="" />
                            </div>
                            <div className="col-4">
                                <img src="../../../images/product/phones&tablet/topBrand.png" alt="" />
                            </div>
                        </div>
                    </div>



                    {/* OFFICIAL STORES */}
                    <div className="blockbuster-2 mb-4 pb-2">
                        <p className='sub-heading text-center bg-1'>Official Stores</p>
                        <div className="row p-2">
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/apple.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/mi.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/samsung.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/infinix.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/tecno.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/nokia.png" alt="" />
                            </div>
                        </div>
                    </div>



                    {/* TOP DEALS */}
                    <div className="blockbuster-2 mb-4 pb-2">
                        <p className='sub-heading bg-2 p-2'>Top Deal</p>
                        <div className="blockbuster-content">
                            {product.map(item => {
                                if (item.sale_type === 'Top Deal' && item.category === 'Electronics') {
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
                    </div>

                    {/* PHONE & TABLET CATEGORY */}
                    <div className="blockbuster-2 mb-4 pb-2">
                        <p className='sub-heading text-center bg-2 p-2'>Phones & Tablet Category</p>
                        <div className="row p-2">
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/andriodPhones.jpg" alt="" />
                                <p className='text-center'>Andriod Phones</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/applePhones.png" alt="" />
                                <p className='text-center'>iPhones</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/cellPhones.png" alt="" />
                                <p className='text-center'>Cell Phones</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/andriodTablet.png" alt="" />
                                <p className='text-center'>Andriod Tablets</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/iPad.png" alt="" />
                                <p className='text-center'>iPads</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/renewed.png" alt="" />
                                <p className='text-center'>Renewed</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/topBrandPhones.png" alt="" />
                                <p className='text-center'>Top Brands</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/builtForSpeed.png" alt="" />
                                <p className='text-center'>Built for Speed</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/largeStorage.png" alt="" />
                                <p className='text-center'>Large Storage</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/largeScreen.png" alt="" />
                                <p className='text-center'>Large Screen</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/accessories.png" alt="" />
                                <p className='text-center'>Accessories</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/phones&tablet/bestForPhotos.png" alt="" />
                                <p className='text-center'>Best For Photos</p>
                            </div>
                        </div>
                    </div>


                </div>
                <BottomSection />

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Electronics);