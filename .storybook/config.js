import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
function loadStories() {
   require('./../components/button/stories.jsx');
}

configure(loadStories, module);
