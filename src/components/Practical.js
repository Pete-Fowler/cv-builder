import React, { Component } from 'react';

class Practical extends Component {

  constructor() {
    super();

    this.state = {
      organization: '',
      title: '',
      description: '',
      from: '',
      to: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState = ({
      ...this.state, 
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div id='practical' className='section'>
        Work Experience
        <form>
          <input name='organization' 
            type='text' 
            onChange={this.handleChange} 
            value={this.state.organization} 
            placeholder='Organization...'>
          </input>
          <input name='title' 
            type='text' 
            onChange={this.handleChange} 
            value={this.state.title} 
            placeholder='Title...'>
          </input>
          <input name='description' 
            type='textarea' 
            onChange={this.handleChange} 
            value={this.state.description} 
            placeholder='Description...'>
          </input>
          <input 
            name='from' 
            type='text' 
            onChange={this.handleChange} 
            value={this.state.from} 
            placeholder='From...'>
          </input>
          <input name='to' 
            type='text' 
            onChange={this.handleChange} 
            value={this.state.to} 
            placeholder='To...'>
          </input>
        </form>
        <button type='submit'>Submit</button>
      </div>
    )
  }
}

export default Practical;