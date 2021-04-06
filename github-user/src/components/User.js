import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.div `
margin: 2% auto 0 auto;
display: flex;
align-items: center;
width: 50%;
background-color: #e5e5e5;
border-radius: 15px 15px 15px;

img{
    margin-left: 1.5%;
    width: 300px;
    border-radius: 15px 15px 15px;
}

section{
    margin-left: 16%;
    font-size: 1.3rem;
}
`

class User extends React.Component {

    render() {

        const { userData } = this.props;
        
      return (
        <StyledUser>
            <div>
            <h2>{userData.login}</h2>
            <img src={userData.avatar_url} alt='user profile' />
            </div>
            <section>
            <p>Name: {userData.name}</p>
            <p>Bio: {userData.bio}</p>
            <p>followers: {userData.followers}</p>
            <p>following: {userData.following}</p>
            <a href={userData.html_url}>Github Profile Link</a>
            </section>
        </StyledUser>
      );
    }
  
  }
  
  export default User;