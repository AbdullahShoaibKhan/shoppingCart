import './ProductScreen.css';

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen_left">
            <div className="left_image">
                <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" />
            </div>
            <div className="left_info">
                <p className="left_name">product</p>
                <p>Price:$434</p>
                <p>dsf uii oaij  aoidgf oiaogiu iouio oai oiag kjaio okliioa</p>
            </div>
            </div>
            <div className="productscreen_right">
                <div className="right_info">
                <p>
                    Price <span> $434</span>
                </p>
                <p>
                    Status <span>In stock</span>
                </p>
                <p>
                    Qty
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option> 
                        <option>4</option>
                    </select>
                </p>
                <p>
                    <button type="button">Add to cart</button>
                </p>
                </div>
            </div>
        </div>
    );
};

export default ProductScreen;