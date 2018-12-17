import React from 'react';
import styled from 'styled-components';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../Providers/AppProvider';
import TileImage from '../Shared/TileImage';

const SpotlightName = styled.h2`
  text-align:center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({currentFavorite, coinList}) => {
        let coin = coinList[currentFavorite];
        return (
        <Tile>
          <SpotlightName>{coin.CoinName}</SpotlightName>
          
          <TileImage 
            highlight 
            imageUrl={`http://cryptocompare.com/${coin.ImageUrl}`}
            alt={coin.Symbol} />          

        </Tile>
      )}}
    </AppContext.Consumer>
  );
}
