import React from 'react'
import '../styles/menu.css';

const Menu = () => {
    return (
        <div className='menu'>
                <a id='hola' className='menu-item' href='#'>Hola</a>
                <a id='destinos' className='menu-item' href='#'>Destinos</a>
                <a id='info' className='menu-item' href='#'>Info Importante</a>
                <a id='tips' className='menu-item' href='#'>Tips Viajeros</a>
                <a id='tienda' className='menu-item' href='#'>Tienda</a>
                <a id='descuentos' className='menu-item' href='#'>Descuentos</a>
        </div>

    )
}

export default Menu;
