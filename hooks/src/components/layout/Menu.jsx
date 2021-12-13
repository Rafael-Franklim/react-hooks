import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li> 
                    <Link to="/useState">Comentarios</Link>
                </li>
                <li> 
                    <Link to="/useEffect">Historia</Link>
                </li>                                
                <li> 
                    <Link to="/useContext">Trofeus</Link>
                </li>                                
            </ul>
        </nav>
    </aside>
)
export default Menu;
