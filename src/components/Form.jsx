import React, { useState } from 'react'

const Form = () => {
   
   const [ info, setInfo] = useState({
      city: '',
      country: ''
   });

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

   }


   return (
      <form
         onSubmit={handleSubmit}
      >
         {error ? <p className="red darken-4">Todos los campos son obligatorios</p> : null}
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
      </form>
   )
}

export default Form
