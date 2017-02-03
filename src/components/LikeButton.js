import React , { PropTypes } from 'react';
import styled from 'styled-components';

const LikeButton = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:hover {
      background: palevioletred;
      color: #fff;
  }
`;

export default LikeButton;