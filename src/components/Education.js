import React, { Component } from 'react';

class Education extends Component {

  constructor() {
    super();

    this.state = {
      school: '',
      description: '',
      from: '',
      to: '',
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
      <div id='education' className='section'>
        Education
        <form>
          <input name='school' type='text' onChange={this.handleChange} value={this.state.school} placeholder='School...'></input>
          <input name='description' type='textarea' onChange={this.handleChange} value={this.state.description} placeholder='Description...'></input>
          <input name='from' type='text' onChange={this.handleChange} value={this.state.from} placeholder='Attended from...'></input>
          <input name='to' type='text' onChange={this.handleChange} value={this.state.from} placeholder='Attended until...'></input>
        </form>
        <button type='submit'>Submit</button>
      </div>
    )
  }
}

export default Education;