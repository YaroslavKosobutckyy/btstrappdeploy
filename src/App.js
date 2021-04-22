import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Pages/Home';
import Slider from './Pages/Slider';
import About from './Pages/About';
import {Provider} from 'react-redux';
import {store} from './redux/store';


function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <NaviBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/slider" component={Slider}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Router>
            </Provider>
            <Footer/>
        </>
    );
}

export default App;
