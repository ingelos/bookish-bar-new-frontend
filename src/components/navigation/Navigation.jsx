import './Navigation.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MagnifyingGlassIcon from '../../assets/magnifying-glass.svg';

function Navigation() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    function handleSearchSubmit(event) {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    }


    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-link-container">
                    <li className="nav-menu-link"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-menu-link"><NavLink to="subjects">Browse</NavLink></li>
                </ul>
                <div className="nav-search-container">
                    <form className="search-bar" onSubmit={handleSearchSubmit}>
                        <input type="search"
                            className="search-bar-input"
                            placeholder="Search by title or author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-bar-button">
                            <img src={MagnifyingGlassIcon} alt='magnifying-glass' className='magnifying-glass-icon' />
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;