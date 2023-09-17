import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { weatherSlice } from './features/api/weatherSlice';
import Home from './component/Home';

function App() {
  return (
    <ApiProvider api={weatherSlice}>
      <div className="App">
        <Home />
      </div>
    </ApiProvider>
  );
}

export default App;
