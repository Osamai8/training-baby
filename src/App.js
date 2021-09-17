// import { Button } from 'bootstrap';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';
import Slider from './components/Slider';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    name: ''
  });

  console.log('user ', user)

  return (
    <Switch>
      <div className="App">
        <Header title="title2" counter={counter} isLogin={isLogin} />
        <button className='btn btn-info' onClick={() => setCounter(counter + 1)} >+</button>
        {counter}
        <button className='btn btn-warning' onClick={() => setCounter(counter - 1)} >-</button>
        <Slider />
        <Route path='/login'>
          <Login setIsLogin={setIsLogin} setUser={setUser} />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>
      </div>
    </Switch>


  );
}

export default App;
