import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import LikeButton from '../components/LikeButton';

storiesOf('Like button', module)
  .add('Normal', () => (
    <LikeButton>Like</LikeButton>
  ))
  .add('Primary', () => (
    <LikeButton primary>Like</LikeButton>
  ))
  .add('Unlike', () => (
    <LikeButton>Unlike</LikeButton>
  ));