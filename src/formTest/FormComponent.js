import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validations';
import {connect} from 'react-redux';
import {loadData} from './actions';



let FormComponent = props => {
    const { handleSubmit, load } = props;

    console.log(props);

    const renderField = ({ input, label, type, className, meta: { touched, error, warning } }) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input
                    {...input}
                    className={className}
                    placeholder={label}
                    type={type} />
                {touched && (error && <span>{error}</span>)}
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <Field
                name="firstName"
                className="form-control"
                type="text"
                component={renderField}
                label="First name"
            />


            <Field
                name="lastName"
                className="form-control"
                type="text"
                component={renderField}
                label="Last name"
            />

            <Field
                name="email"
                className="form-control"
                type="text"
                component={renderField}
                label="Email"
            />

            <button type="submit">Submit</button>
        </form>
    );
}

FormComponent = reduxForm({
    form: 'formTest',
    validate,
    enableReinitialize: true
})(FormComponent);

FormComponent = connect(
    state => ({
        initialValues: state.customerActivityReducer.policyHolder
    }),
    {load: loadData}
)(FormComponent);

export default FormComponent;