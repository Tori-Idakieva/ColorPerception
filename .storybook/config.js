import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
function loadStories() {
   require('./../components/button/stories.jsx');
   require('./../components/header/stories.jsx');
   require('./../components/img/stories.jsx');
   require('./../components/input/stories.jsx');
   require('./../components/form/stories.jsx');
}

configure(loadStories, module);
