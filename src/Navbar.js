// component is just function that returns JSX
// create functional component  "sfc"

// stateless functional component
// / is home page    
// {} for dynamic value
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The LongChen Blog</h1>
            <div className="links"> 
                <a href="/">Home</a>   
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
