import React, {lazy, Fragment, useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StateContext } from './state';

const Home = lazy(() => import('./pages/Home'));
const Basket = lazy(() => import('./pages/Basket'));
const BasketWithClass = lazy(() => import('./pages/BasketWithClass'));

function Navigation() {
    
    const [state, dispatch] = useContext(StateContext);
    useEffect(()=> {
        dispatch({})
    }, []);

  return (
    <Fragment>
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/basket/">Basket</Link>
                    </li>
                    <li>
                    <Link to="/basket2/">Basket with Class</Link>
                    </li>
                </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/basket/" component={Basket} />
                <Route path="/basket2/" component={BasketWithClass} />
            </div>
        </Router>
    </Fragment>
  );
}

export default Navigation;
