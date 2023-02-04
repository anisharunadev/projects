import './App.scss';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
