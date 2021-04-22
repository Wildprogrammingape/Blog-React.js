// component is just function that returns JSX
// create functional component  "sfc"

// stateless functional component
// / is home page    
// {} for dynamic value
// 传统的 <a> tag仍然会发送request到server, 因此要用react router的 Link，让react router处理页面跳转

import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The LongChen Blog</h1>
            <div className="links"> 
                <Link to="/">Home</Link>   
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
