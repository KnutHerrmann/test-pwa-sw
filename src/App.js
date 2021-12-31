import React, {useEffect} from "react";
import {
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import './App.css';
import {VERSION} from "./version";

const Home = React.lazy(() => import('./Home'));
const Editor = React.lazy(() => import('./Editor'));
const List = React.lazy(() => import('./List'));

const App = () => {

  const history = useHistory();

  useEffect(() => {
    navigator && history.listen((location, action) => {
      // check for sw updates on page change
      navigator.serviceWorker && navigator.serviceWorker
          .getRegistrations()
          .then((regs) => regs.forEach((reg) => reg.update()));
    });
  }, [history]);

  return (
      <div className="App">
        <div>
          <Link to="/" className="App-link">Home</Link> | {' '}
          <Link to="/editor" className="App-link">Editor</Link> | {' '}
          <Link to="/list" className="App-link">List</Link>
        </div>
        <div>
          <hr/>
          <div style={{width: '90vh'}}>Version {VERSION}</div>
          <hr/>
          <div style={{height: '300px'}}>
            <React.Suspense fallback='loading...'>
              <Switch>
                <Route path="/editor" component={Editor}/>
                <Route path="/list" component={List}/>
                <Route path="*" component={Home}/>
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </div>
  );
}

export default App;
