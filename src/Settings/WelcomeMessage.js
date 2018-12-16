import React from 'react';
import {AppContext} from '../App/AppProvider';

export default class WelcomeMessage extends React.Component {
    render() {
      return (
      <AppContext.Consumer>
        {({firstVisit}) =>
          firstVisit ? <div>
            Welcome to CryptoDash, please select your favorite coins to begin.{' '}
          </div> : null
        }
      </AppContext.Consumer>);
    }
}