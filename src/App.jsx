import './assets/css/App.css';
import Router from './Router';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">  
        <Router />  

        <div className="clearfix"></div>
        <Footer />  
    </div>
  );  
}

export default App;
