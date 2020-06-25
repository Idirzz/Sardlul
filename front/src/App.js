import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"

import styles from './public/css/app.module.css';
import Summoner from "./components/summoner.component";

function App() {
    return (
        <Router>
        {styles.inc}
            <Route path="/:name" exact component={Summoner} />
        </Router>
        );
    }
    
    export default App;
    