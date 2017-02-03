import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';

addDecorator((story) => (
  <div style={{textAlign: 'center', width: '300px', backgroundColor: '#eeeeee'}}>
    {story()}
  </div>
));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
