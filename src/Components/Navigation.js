import React from 'react'
import { Link , Switch , Route } from "react-router-dom"
import '../Assets/Navigation.css'
import Home from './Home'
import Features from './Feature'
import Login from './Forms/Login'
import Modal from './Forms/Modal'
import DataLink from './DataTables/DataNavLink'
import dataTables from './DataTables/DataTables'

class Navigation extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal:false
          }
    }
    render() {
        return(
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand" href="">magmemerge conflict dapat merge conflict 2nd test</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={'/Home'}>
                                <div  className="nav-link">Home</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Features'}>
                                <div className="nav-link">Features</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Login'}>
                                <Modal show={this.state.showModal} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/DataTables'}>
                                <DataLink/>
                            </Link>
                        </li>
                        
                        </ul>
                    </div>
                    
                </nav>   
                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route path='/Features' component={Features} />
                    <Route path='/Login' component={Login} />
                    <Route path='/DataTables' component={dataTables} />
                </Switch>
            </div>
            
        );
    }
}



export default Navigation;