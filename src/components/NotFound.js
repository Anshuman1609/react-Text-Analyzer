import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container text-center jumbotron display-4 my-5">404 Error Not Found</div>
            <Link to="/">
                <button onli className="container btn btn-success my-5 py-5">
                Back To HomePage
                </button>
            </Link>
        </div>
    )
}

export default NotFound;