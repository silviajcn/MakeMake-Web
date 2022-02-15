import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <div>

            <Link to="/institutos" className="links">
                 <p>Institutos</p>
            </Link>
            
            </div>

            <div>

            <Link to="/edit" className="links">
                <p>Editar</p>
            </Link>
            
            </div>
        </div>
    )
};

export default Home;