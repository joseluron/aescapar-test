import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-javascript'

import Client from './services/prismic-service';

import logo from './logo.svg';
import './App.css';

interface Scape {
  data: any
}

function App() {
  const [allScapes, setAllScapes] = useState(new Array());
  const [toShowScape, setToShowScape] = useState<Scape>({data: ''});
  
  useEffect(() => {
    const fetchScapes = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'post')
      )
      if (response) {
        console.log('All scapes: ', response);
        setAllScapes(response.results);
      }
    }

    fetchScapes();
  }, [])
  
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <h1>El pato al escape!</h1>
        <div className="scapes-container">
          <div className="scapes-wrapper">
            {allScapes && allScapes.map(scape => {
              console.log("All scapes down: ", allScapes);
              return <span className="scape-def" onClick={() => setToShowScape(scape)}>{scape.data.title[0].text}</span>;
            })}
          </div>
        </div>
        {toShowScape && toShowScape.data &&
          <div className="single-scape-container">
            <div className="single-scape-wrapper">
                <span>{toShowScape.data.title[0].text}</span>
                <span>{toShowScape.data.subtitle[0].text}</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
