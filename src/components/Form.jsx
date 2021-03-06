import React, { useState } from 'react';
import Error from './Error';

import PropTypes from 'prop-types';

const Form = ({info, setInfo, setConsultar}) => {
   
   
   const [ error, setError ] = useState(false)

   // extraer ciudad y pais del state

   const { city, country } = info;

   // Leer la info de los inputs
   const handleChange = (e) => {
      setInfo({
         ...info,
         [e.target.name] : e.target.value
      })
   }

   // 
   const handleSubmit = (e) => {
      e.preventDefault()

      // Validar
      if (city.trim() === '' || country.trim() === '') {
         setError(true);
         return
      }

      setError(false)
      // Enviar info al componente principal
      setConsultar(true)

   }


   return (
      <form
         onSubmit={handleSubmit}
      >
         {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
         <div className="input-field col s12">
            <input
               type="text"
               name="city"
               id="city" 
               onChange={handleChange}
               value={city}
            />
            <label htmlFor="city">Ciudad</label>
         </div>
         <div className="input-field col s12">
            <select
               name="country"
               id="country"
               onChange={handleChange}
               value={country}
            >
               <option value="">-- Selecciona un pais --</option>
               <option value="US">Estados Unidos</option>
               <option value="CA">Canadá</option>
               <option value="MX">México</option>
               <option value="AR">Argentina</option>
               <option value="CO">Colombia</option>
               <option value="CR">Costa Rica</option>
               <option value="ES">España</option>
               <option value="PE">Perú</option>
            </select>
            <label htmlFor="country">País</label>
         </div>
         <div className="input-field col s12">
            <button
               type="submit"
               className="waves-effect waves-light btn-large btn-block yellow accent-4 black-text col s12"
            >Buscar Clima</button>
         </div>

      </form>
   )
}

Form.protoTypes = {
   info: PropTypes.object.isRequired,
   setInfo : PropTypes.func.isRequired,
   setConsultar : PropTypes.func.isRequired
}

export default Form
