import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";

import { Layout } from './../components/pages/layout.jsx';

class App extends React.Component {
	render() {
		return(
			<Layout /> 
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);