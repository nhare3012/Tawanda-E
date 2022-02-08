import './ProductScreen.css'

function ProductScreen() {
    return (
        <div className="container">
            <div className="productscreen">
                <div className="productscree__left">
                    <div className="left__image">
                        <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="product name" className="img-fluid" srcset="" />

                     </div>
                     <div className="left__info">
                         <p className="left__name">Product 1</p>
                         <p>price: 400</p>
                         <p>description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, exercitationem?</p>
                     </div>

                </div>
                <div className="productscree__right">
                    <div className="right__info">
                        <p>
                            Srice: <span>$500</span>
                        </p>
                        <p>
                            Status: <span>In Stock</span>

                        </p>
                        <p>
                            Qty: 
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </p>
                        <p>
                            <button type="button">Add to Cart</button>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
