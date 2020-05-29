import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard() {
    return (
        <div>
          
            <div className="col mb-4">
                {/* <!-- Card --> */}
                <div className="card">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <img className="card-img-top" src={product.image} alt="Card image cap" />
                        <Link to={'/product/${product._id}'}>
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>

                    {/* <!--Card content--> */}
                    <div className="card-body">
                        {/* <!--Title--> */}
                        <h4 className="card-title">{product.name}</h4>
                        {/* <!--Text--> */}
                        <p className="card-text">{product.shortDescription}</p>
                        {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                        <Link to="/" className="btn btn-primary btn-md">Visa Produkt</Link>
                    </div>

                </div>
                
            </div>
           
        </div>

    )
}


