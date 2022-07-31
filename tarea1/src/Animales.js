import React from "react";

function Animales() {
    const data = [
        {
            "nombre": "Perro",
            "Descripcion": "El mejor amigo del Hombre"
        },
        {
            "nombre": "Gatos",
            "Descripcion": "Excelentes compañias del hogar"
        },
        {
            "nombre": "Leon",
            "Descripcion": "El rey de la Sabana Africana"
        },
        {
            "nombre": "Leopardo",
            "Descripcion": "Felino mas rapido del mundo"
        },
        {
            "nombre": "Cocodrilo",
            "Descripcion": "Animal con la mordida mas poderas del mundo"
        }
    ]
    const listItems = data.map(
        (animal) => {
            return (
                <ul>
                    <li style={{ 
                        fontWeight: 'bold', 
                        listStyle : 'none' }}
                    >
                        {animal.nombre}:
                    </li>
                    <li style={{ 
                        listStyle : 'none' }}
                    >
                        {animal.Descripcion}
                    </li>
                </ul>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}

export default Animales;