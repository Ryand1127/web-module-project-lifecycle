import React from 'react';
import styled from 'styled-components';



const StyledFollower = styled.div `
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

a{
    margin-left: 16%;
    font-size: 1.3rem;
}
`


class Followers extends React.Component {

    render() {

        const { followers } = this.props;

      return (
        <div>
             {
                followers.map(follow => {
                    return (
                        <StyledFollower>
                            <div>
                            <h2>{follow.login}</h2>
                            <img src={follow.avatar_url} alt='user profile' />
                            </div>
                            <a href={follow.html_url}>Github Profile Link</a>
                        </StyledFollower>
                        );
                 })
             }
        </div>
      );
    }
  
  }
  
  export default Followers;