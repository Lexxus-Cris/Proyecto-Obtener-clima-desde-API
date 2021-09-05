import React, { Fragment, useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  // State que almacena la informacion ingresada por el usuario
  const [ info, setInfo] = useState({
      city: '',
      country: ''
  });

  // State para manejar errores
  const [error, setError] = useState(false)

  // State que controla cuando se realiza una consulta
  const [consultar, setConsultar] = useState(false)
  // State en donde se almacenan los datos de la peticion a la API
  const [results, setResults] = useState({})

  const { city, country } = info;

  // Usamos useEffect cuando hagamos una consulta a la API
  useEffect(() => {
      if (consultar) {
        const API_KEY = '1f6a8977cbd2b67fa522d3d4f647e15f'
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${ city },${country}&appid=${API_KEY}`
        const consultarApi = async () => {
        let response = await fetch(API);
        let data = await response.json();

        setResults(data);
        setConsultar(false);
        
        if (results.cod === "404") {
          setError(true);
        }else{
          setError(false)
        }
      }
      consultarApi()
    }
  }, [consultar])

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima
      results={results}
    />
  }

  return (
    <Fragment>
      <Header 
        titulo='Clima React-App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                info={info}
                setInfo={setInfo}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
