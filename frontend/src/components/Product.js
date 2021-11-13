import './Product.css';
import {Link} from 'react-router-dom';

const Product=()=> {
    return (
        <div className="products">
            <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt=""/>
            <div className="product_info">
            <p className="info_name">Name</p>
            <p className="info_description">lorem h;djucn hd idcdjd hOJIXJOI  SDCSIXS II IO OISD</p>
            <p className="info_price">$454</p>
            <Link to={`/products/${1111}`} className="info_button">View</Link>
            </div>
        </div>
    );
}

export default Product;