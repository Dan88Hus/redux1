 import React from 'react';
import { Field, reduxForm } from 'redux-form';



class StreamForm extends React.Component{
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
          </div>
      )
    }
  }



  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error&&meta.touched ? 'error': ''}`
    return (
      // formProps destructured
      // <input onChange={formProps.input.onChange}
      // value={formProps.input.value}
      // ></input> equal ES6 Syntax
    
      <div className={className}>
        <label>{label}</label>
      <input {...input} autoComplete="off"/>
      <div>{this.renderError(meta)}</div>
      </div>
    )

  }

  onSubmit = (formValues) => {
    // event.preventDefault(); handleSubmit makes it
    this.props.onSubmit(formValues);

  } 

  // this is called inside of handlesubmit as we use redux-form

  render(){

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title: "/>
        <Field name="description" component={this.renderInput} label="Enter Description: "/>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
  
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title){
    errors.title = 'You must enter a Title'
  }

  if (!formValues.description) {
    errors.description = 'Please enter description'
  }
  return errors;

}

export default  reduxForm({
  form: 'StreamForm',
  validate
})(StreamForm);



/// stream create copied above
