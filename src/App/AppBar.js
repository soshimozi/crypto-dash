import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from '../Providers/AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`

const ControlButtonElem = styled.div`
    cursor:pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 60px #ffffff;
    `}
`

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substring(1);
}
function ControlButton({name, active}) {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
              <ControlButtonElem 
                active={page === name}
                onClick={() => setPage(name)}
              >
                {toProperCase(name)}
              </ControlButtonElem>
              )}
        </AppContext.Consumer>);
}

export default class extends Component {
    render() {
        return (<Bar> 
            <Logo>CryptoDash</Logo> 
            <div/>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
        </Bar>);
    }
}