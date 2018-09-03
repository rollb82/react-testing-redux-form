import React from 'react';
import { connect } from 'react-redux';

import FormComponent from './FormComponent';
import { prepareData } from './actions';
import {loadData} from './actions';
const data = {"firstName":"christopher","lastName":"seamon","email":"goape@28solutions.com"};

const mapStatesToProps  = (state) => { 
    return {
        test: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        prepareData: (values) => dispatch(prepareData(values)),
        loadData: (data) => dispatch(loadData(data))
    }
}

class FormContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.loadData(data)    
        }, 5000);
        
    }

    submit(values){ 
        this.props.prepareData(values);
    }


    render(){
        return (
            <div>
                <FormComponent onSubmit={this.submit} />
            </div>
        );
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(FormContainer);