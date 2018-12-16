import React from 'react';
import {AppContext} from "../App/AppProvider";
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import TileImage from '../Shared/TileImage';

export default function({coinKey, topSection}) {

  return <AppContext.Consumer>
    {({coinList}) => {
      let coin = coinList[coinKey];

      const TileClass = topSection ? DeletableTile : SelectableTile;

      return <TileClass>
        <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
        <TileImage 
          imageUrl={`http://cryptocompare.com/${coin.ImageUrl}`}
          alt={coin.Symbol} />
      </TileClass>
    }}

  </AppContext.Consumer>


}