import "./SideDrawer.css";
import {Link} from 'react-router-dom';

const SideDrawer=({show, click})=> {
    const sideDrawerClass=["sidedrawer"];
    if(show){
        sideDrawerClass.push(show);
        {console.log("yo")};
    }
    
    return (
        <div className={sideDrawerClass.join(" ")}>
           <ul className="sidedrawer_link" onClick={click}>
            <li>
                <Link to="/cart">
                {/* <i className="fas fa-shopping"></i> */}
                <span>
                Cart <span className="sidedrawer-cartbadge">0</span>
                </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                Shop
                </Link>
            </li>
            </ul> 
        </div>
    );
};

export default SideDrawer;