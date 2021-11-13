import Product from '../components/Product';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className="homescreen">
           <h2 className="homescreen_title">Latest Products</h2>
           <div className="homescreen_product">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
           </div>
        </div>
    );
};

export default HomeScreen;