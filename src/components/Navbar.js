import reactIcon from '../images/react-icon-small.png'


function Navbar(){
    return (
       <nav className="navbar"> 
            <ul className="nav-items">
                <img src={reactIcon} alt='react-small-icon' />
                <h3>React Facts</h3>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
       </nav> 
    )
}

export default Navbar;