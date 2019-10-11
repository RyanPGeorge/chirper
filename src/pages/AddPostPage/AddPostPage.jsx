import React, { Component } from 'react';

class AddPostPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      body: '',
      user: this.props.user && this.props.user._id
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddPost(this.state.formData);
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
        <h1>*chirp*</h1>
        <form
          ref={this.formRef}
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <div className='form-group'>
            <input
              className='form-control'
              name='body'
              value={this.state.formData.post}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='btn'
            disabled={this.state.invalidForm}
          >
            ADD CHIRP
          </button>
        </form>
      </>
    );
  }
}

export default AddPostPage;
