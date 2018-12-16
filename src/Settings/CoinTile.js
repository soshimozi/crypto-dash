import React from 'react';
import {AppContext} from "../Providers/AppProvider";
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import TileImage from '../Shared/TileImage';

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey)
  } : () => {
    addCoin(coinKey);
  }
}

export default function({coinKey, topSection}) {

  return <AppContext.Consumer>
    {({coinList, addCoin, removeCoin, isInFavorites}) => {
      let coin = coinList[coinKey];

      const TileClass = topSection ? DeletableTile : isInFavorites(coinKey) ? DisabledTile : SelectableTile;

      return <TileClass
        onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
      >
        <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
        <TileImage 
          imageUrl={`http://cryptocompare.com/${coin.ImageUrl}`}
          alt={coin.Symbol} />
      </TileClass>
    }}

  </AppContext.Consumer>


}