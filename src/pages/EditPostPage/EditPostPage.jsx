import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditPostPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.post
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePost(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Chirp</h1>
        <form
          ref={this.formRef}
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <div className='form-group'>
            <input
              className='form-control'
              name='body'
              value={this.state.formData.body}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='btn btn-xs'
            disabled={this.state.invalidForm}
          >
            SAVE CHIRP
          </button>
          &nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditPostPage;
