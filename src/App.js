import React, { Fragment, useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';

function App() {

  const [ info, setInfo] = useState({
      city: '',
      country: ''
  });

  const [consultar, setConsultar] = useState(false)

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
      }
      consultarApi()
    }
  }, [consultar])


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
              <Clima
                results={results}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
