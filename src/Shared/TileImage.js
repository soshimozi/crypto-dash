import React from 'react';
import styled, {css} from 'styled-components';

const CoinImage = styled.img`
  height: 50px;
  ${props => props.highlight && css`
    height: 200px;
    margin: auto;
    display: block;
  `}
`;
export default function ({imageUrl, alt, highlight}) {
  return (
    <CoinImage
    highlight={highlight}
    alt={alt || ''}
    src={imageUrl}
    />
  );
}