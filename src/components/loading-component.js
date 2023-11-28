import React from "react";
import '../styles/loading-component.css'
import plane from '../images/airplane.png';

const LoadingComponent = () => {
    return(
        <div className="loading-component-container">
            <div className="loading-component">
                <img className="plane" src={plane} alt="plane"/>
                <p className="loading"><br/><br/>Cargando...</p>
            </div>
        </div>
    )
}

export default LoadingComponent;