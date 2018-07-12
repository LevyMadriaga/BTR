import React from 'react';
import { FormGroup,} from 'reactstrap'
import '../Assets/Home.css'
import Book from './Reference/Book'
import HomeDiv from './Reference/HomeDiv'
import Footer from './Footer'

// import SearchForm from './Forms/jsonSchemaForms/SearhBus'
// import SearchUi from './Forms/jsonSchemaForms/uiSchema/SearchBus'
// import Forms from "react-jsonschema-form" 


class Home extends React.Component {
    render() {
        return(
            <div>
                <FormGroup>
                    <Book/>
                </FormGroup>
                <FormGroup>
                    <HomeDiv/>
                </FormGroup>
                <FormGroup>
                    <Footer/>
                </FormGroup>               
            </div>
        )
    }
}

export default Home;