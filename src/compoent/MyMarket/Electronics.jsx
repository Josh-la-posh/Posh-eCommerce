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
                                <img src="../../../images/product/electronics/homeTheatres.png" alt="" />
                            </div>
                            <div className="col-4">
                                <img src="../../../images/product/electronics/smartTvs.png" alt="" />
                            </div>
                            <div className="col-4">
                                <img src="../../../images/product/electronics/portablePower.png" alt="" />
                            </div>
                        </div>
                    </div>



                    {/* OFFICIAL STORES */}
                    <div className="blockbuster-2 mb-4 pb-2">
                        <p className='sub-heading text-center bg-1'>Official Stores</p>
                        <div className="row p-2">
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/jbl.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/sony.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/hisense.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/weyon.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/nexus.png" alt="" />
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/lg.png" alt="" />
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
                        <p className='sub-heading text-center bg-2 p-2'>Electronics Category</p>
                        <div className="row p-2">
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/ledTv.png" alt="" />
                                <p className='text-center'>Led TVs</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/smartTv.png" alt="" />
                                <p className='text-center'>Smart TVs</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/32Tv.png" alt="" />
                                <p className='text-center'>32" TVs</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/43Tv.png" alt="" />
                                <p className='text-center'>43" TVs</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/50Tv.png" alt="" />
                                <p className='text-center'>50" TVs</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/55Tv.png" alt="" />
                                <p className='text-center'>55" TVs</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/inverter.png" alt="" />
                                <p className='text-center'>Inverters</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/generator.png" alt="" />
                                <p className='text-center'>Generators</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/homeTheatre.png" alt="" />
                                <p className='text-center'>Home Theatres</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/soundbar.png" alt="" />
                                <p className='text-center'>Soundbar</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/portableSpeaker.png" alt="" />
                                <p className='text-center'>Portable Speakers</p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <img src="../../../images/product/electronics/streamingAudio.png" alt="" />
                                <p className='text-center'>Streaming Audios</p>
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