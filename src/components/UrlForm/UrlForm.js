import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      long_url: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.postData({...this.state, id: Date.now()})
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          className='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          className='long-url'
          value={this.state.long_url}
          onChange={e => this.handleNameChange(e)}
        />

        <button className='submit-btn' onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
