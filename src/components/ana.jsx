import React from "react";
import estilo from '../components/testimonioDesing.module.scss'

function Ana(props){
    return(
        <div className={estilo.contenedor}>
            <img 
            className={estilo.img} 
            src={props.imagen} 
            alt="" />
            <div className={estilo.datos}>
                <p className={estilo.title}> {props.nombre} de {props.pais}</p>
                <p className={estilo.info}>{props.cargo} en {props.empresa}</p>
                <p className={estilo.test}>{props.testimonio}</p>
            </div>
        </div>
    )
}
export default Ana;