import React, {useEffect} from "react";
import {
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import './App.css';

const Home = React.lazy(() => import('./Home'));
const A = React.lazy(() => import('./A'));
const B = React.lazy(() => import('./B'));

export const VERSION = '56';

const App = () => {

  const history = useHistory();

  useEffect(() => {
    history.listen((location, action) => {
      // check for sw updates on page change
      navigator.serviceWorker
          .getRegistrations()
          .then((regs) => regs.forEach((reg) => reg.update()));
    });
  }, [history]);

  return (
      <div className="App">
        <div>
          <Link to="/" className="App-link">Home</Link> | {' '}
          <Link to="/a" className="App-link">Editor</Link> | {' '}
          <Link to="/b" className="App-link">Something</Link>
        </div>
        <div>
          <hr/>
          <div style={{width: '400px'}}>Version {VERSION}</div>
          <hr/>
          <div style={{height: '300px'}}>
            <React.Suspense fallback='loading...'>
              <Switch>
                <Route path="/a" component={A}/>
                <Route path="/b" component={B}/>
                <Route path="*" component={Home}/>
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </div>
  );
}

export default App;
