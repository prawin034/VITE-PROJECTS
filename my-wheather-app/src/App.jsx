import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [location, setlocation] = useState('coimbatore');
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f612e27af2f5adcd49883f1e3e79779b`;
  const [item, setitem] = useState({});

  async function getWheatherRequest() {
    try {
      const response = await axios.get(api);
      const data = await response.data;
      setitem(data);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
    setlocation('');
  }

  const submithandler = (e) => {
    e.preventDefault();
    getWheatherRequest();

    setlocation('');
  };

  useEffect(() => {
    getWheatherRequest();
  }, []);

  return (
    <section className="wheather">
      <form onSubmit={submithandler} className="wheather_input">
        <input
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          type="text"
          placeholder="ENTER YOUR CITY"
        />
        <button className="btn">SUBMIT</button>
      </form>
      <div className="wheather_flex">
        <div className="wheather_top">
          <h1 className="wheather_top_name">{item.name}</h1>
          <p
            className="wheather_top_degree"
            dangerouslySetInnerHTML={{
              __html: `${item.main?.temp}&#176 F`,
            }}
          ></p>
          <p className="wheather_top_cloud">{item.weather?.[0].main}</p>
        </div>
        <div className="wheather_bottom">
          <div>
            <p
              className="wheather_bottom_degree"
              dangerouslySetInnerHTML={{
                __html: `${item.main?.feels_like}&#176 F`,
              }}
            ></p>
            <p>FEELS LIKE</p>
          </div>
          <div>
            <p className="wheather_bottom_percent">{item.wind?.deg}%</p>
            <p>HUMIDITY</p>
          </div>
          <div>
            <p>{item.wind?.speed}MPH</p>
            <p>WIND SPEED</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
