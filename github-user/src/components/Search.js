import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.form`

border-bottom: 2px solid white;

input{
    font-size: 1.1rem;
}

button{
    font-size: 1.1rem;
    margin-left: 0.5%;
    margin-bottom: 0.5%;
}


`

class Search extends React.Component {
    
    
    constructor() {
        super();
        this.state = {
            search: ""
        };
    };
    
    handleChange = e => {
        this.setState({
            ...this.state,
            search: e.target.value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.searchFunc(this.state.search)
        this.setState({
            ...this.state,
            search: ""
        })
    };
    
    render() {
        
        return(
            <StyledSearch onSubmit={this.handleSubmit}>
                <input 
                type="text"
                placeholder="Search User..."
                onChange={this.handleChange}
                value={this.state.search}
                />
                <button type="submit">Submit</button>
            </StyledSearch>
        )
        
    }

}

export default Search;