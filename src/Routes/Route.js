import React from 'react';
import { Link , Switch , Route } from "react-router-dom";

class Route extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route path='/Features' component={Features} />
                    <Route path='/Login' component={Login} />
                </Switch>
            </div>
        );
    }
}

export default Route;