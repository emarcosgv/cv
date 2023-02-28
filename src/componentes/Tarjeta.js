import React from "react";
import '../hojas-de-estilo/Tarjeta.css'

function Tarjeta(props) {
    return (
        <div className='contenedor-tarjeta'>
            <img className='imagen-tarjeta' src={require(`../imagenes/tarjeta-${props.imagen}.png`)} alt='No se puede mostrar la imágen' />

            <div className='contenedor-texto-tarjeta'>
                <p className='nombre-tarjeta'>Soy <strong>{props.nombre}</strong> vivo en {props.pais}.</p>
                <p className='cargo-tarjeta'>{props.cargo} de {props.empresa}.</p>
                <p className='texto-tarjeta'>"{props.testimonio}"</p>

            </div>
        </div>
    );
};

export default Tarjeta;