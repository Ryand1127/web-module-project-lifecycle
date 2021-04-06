import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Importing Component
import User from './components/User'
import Followers from './components/Followers'
import Search from './components/Search'

const StyledDiv = styled.div`

text-align: center;

  h1{
    font-size: 3.8rem;
    color: white;
  }
  
  h3{
    font-size: 3rem;
    color: white;
  }

`

class App extends React.Component {
  
  state = {
    user: 'ryand1127',
    userData: [],
    followers: []
  }

  componentDidMount() {
    this.searchFunc(this.state.user)
  };

  searchFunc = search => {
    axios.get(`https://api.github.com/users/${search}`)
      .then(res => this.setState({
        ...this.state,
        user: search,
        userData: res.data
      }))
      .catch(err => console.log(err));

      axios.get(`https://api.github.com/users/${search}/followers`)
      .then(res => this.setState({
        ...this.state,
        followers: res.data
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <StyledDiv>
        <h1>GitHub User Search</h1>
        <Search searchFunc={this.searchFunc} />
        <User userData={this.state.userData} />
        <h3>Followers</h3>
        <Followers followers={this.state.followers} />
      </StyledDiv>
    );
  }

}

export default App;
