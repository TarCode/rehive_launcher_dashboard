import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './components/nav'
import Wallets from './components/wallets'
import Markets from './components/markets'

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: 'rgb(60, 141, 188)'
	},
	appBar: {
	},
});



const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)


export default () => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router>
			<div>
				<Nav />

				<div style={{
					marginLeft: '266px',
					marginRight: '20px'
				}}>
					<Route exact path="/" component={Home} />
					<Route path="/wallets" component={Wallets} />
					<Route path="/markets" component={Markets} />
				</div>
			</div>
		</Router>
	</MuiThemeProvider>
)