import React, { Component } from 'react';

class General extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      phone: '',
      email: '',
      link: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div id='general' className='section'>
        <form>
          <input name='name' type='text' onChange={this.handleChange} value={this.state.name} placeholder='Name...'></input>
          <input name='address' type='address' onChange={this.handleChange} value={this.state.address} placeholder='Address...'></input>
          <input name='phone' type='tel' onChange={this.handleChange} value={this.state.phone} placeholder='Phone number...'></input>
          <input name='email' type='email' onChange={this.handleChange} value={this.state.email} placeholder='Email...'></input>
          <input name='link' type='url' onChange={this.handleChange} value={this.state.link} placeholder='Web link...'></input>
        </form>
        <button type='submit'>Submit</button>
      </div>
    )
  }
}

export default General;