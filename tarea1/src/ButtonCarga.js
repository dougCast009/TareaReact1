import React from "react";

function ButtonCarga(props){
    let valor;
    
    return(
        <div>
            <button onClick={cambiarBoton(props.cargando)}>{valor}</button>
        </div>
    )
    function cambiarBoton(a){
        if(a ==  true){
            valor = "Cargando";
        } else {
            valor = "Listo"
        }
    }
}
export default ButtonCarga;