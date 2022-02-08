import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div className='app'>
        <div className='app-top'>
          <div className='abc'>
          <Card1 />
          </div>
          <div className='abc'>
          <Card2 />
          </div>
        </div>
        <div className='app-top'>
          <div className='abc'>
          <Card3/>
          </div>
          
          <div className='abc'>
            <Card4/>
            <Card5/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
