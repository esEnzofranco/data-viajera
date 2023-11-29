import React from "react";
import '../styles/loading-component.css'
import loading from '../images/loading.png';
import earth from '../images/earth.png';

const LoadingComponent = () => {
    return (
        <div className="loading-component">
            <img className="loading" src={loading} alt="plane" />
            <img className="earth" src={earth} alt="earth" />
        </div>
    )
}

export default LoadingComponent;