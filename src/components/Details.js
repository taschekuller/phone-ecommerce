import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import {ButtonContainer} from './button'


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                   const{id,company,img,info,price,title,inCart} = value.detailProduct
                   return(
                       <div className="container py-5"> 
                        <div className="row"> {/* start title */}
                            <div className="col-10 mx-auto text-center text-slanted text-titleorange my-5">
                                <h1>{title}</h1>
                            </div>
                        </div> {/* end title */}
                        <div className="row">
                            <div className="col-1o mx-auto col-md-6 my-3 text-capitalize"> {/* product img */}
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            <div className="col-1o mx-auto col-md-6 my-3 text-capitalize"> {/* product info */}
                                <h2>Model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="mx-auto my-3">
                                    <strong>price:<span>₺</span>{price}</strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    <strong>Detail Information About The Product</strong> <br />
                                    {info}
                                </p>
                                <div> 
                                    <Link to="/">
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                        <ButtonContainer 
                                        cart
                                        className="my-3"
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }}>
                                            {inCart?'inCart':"Add to Cart"}
                                        <span className="me-1">
                                        <i class="fas fa-cart-plus" />
                                        </span>
                                        </ButtonContainer>
                                </div>
                            </div>
                        </div>
                       </div>
                   )
                }}
            </ProductConsumer>
        )
    }
}
