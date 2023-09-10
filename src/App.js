import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

/*
async function searchWeather(city) {
  const apiKey = 'cfbdccebe58f79a4e1c5de3700f4f8d5';
  const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=fa';
  let apiWeather = `${apiURL}&appid=${apiKey}&q=${city}`;
  const res = await fetch(apiWeather);
  return await res.json();
}
*/

function App() {
  return (
    <main className="App">
      <h1 className='text-center'>Weather App</h1>
    </main>
  );
}

export default App;
