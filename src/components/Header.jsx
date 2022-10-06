import { Link } from 'react-router-dom';

import './header.css';

function Header() {
    return (
        <div className='wrapper'>
            <div className="container">
                <ul className='flex'>
                    <Link to="/1">
                        <li>Челюськіна 1</li>
                    </Link>
                    <Link to="/75">
                        <li>Володимира Антоновича 75</li>
                    </Link>
                    <Link to="/73" >
                        <li>Володимира Антоновича 73</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;