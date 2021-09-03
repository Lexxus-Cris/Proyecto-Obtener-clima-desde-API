import React from 'react'

const Clima = ({results}) => {

   // Extraemos valores que necesitamos
   const { name, main } = results;

   // Evitamos que el componente se recargue
   if (!name) return null;

   // Obtenemos los grados en centigrados
   let tempCelsius = main.temp - 273.15;
   let temp_max = main.temp_max - 273.15;
   let temp_min = main.temp_min - 273.15;

   return (
      <div className="card-panel white col s12">
         <div className="black-text">
            <h2>El clima de {name} es: </h2>
            <p className="temperatura">
               {tempCelsius.toFixed(2)} <span>&#x2103;</span>
            </p>
            <p>Temperatura maxima: {temp_max.toFixed(2)} <span>&#x2103;</span>
            </p>
            <p>Temperatura minima: {temp_min.toFixed(2)} <span>&#x2103;</span>
            </p>
         </div>
      </div>
   )
}

export default Clima
