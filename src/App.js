import React from 'react';
import { BrowserRouter as Router, useRoutes, Link } from "react-router-dom";
import Cart from './components/Cart';
import Login from '../src/components/Login';
import ViewDetails from './components/ViewDetails';
import { useSelector } from 'react-redux';
import { getItems } from '../src/store/cart';
import './app.css';

const RoutePublic = () => {

    let routes = useRoutes([
      { path: "/", element: <Login/> },
      { path: "cart", element: <Cart /> },
      { path: 'viewDetails/:id', element: <ViewDetails /> }
    ]);
    return routes;
  };

const App = () => {
  const items = useSelector(state => getItems(state));
  const cartText = items.length > 0 ? `Cart(${items.length})`: `Cart`;
    return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav>
              <Link to="/">header</Link>
              <Link to="/cart" className='float-right'>Logout</Link>              
            </nav>
          </div>
        </div>
      </div>
      <RoutePublic/>
    </Router>
  );
}

export default App;
