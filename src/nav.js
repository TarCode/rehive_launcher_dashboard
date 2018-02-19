import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

export default class extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<AppBar
					title="TokeLaunch"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				
				/>
				<Drawer open={true}>
					<AppBar title="TokeLaunch" />
					<img style={{
						position: 'relative',
						width: '100%',
						height: 'auto'
					}} src="https://img00.deviantart.net/c9b6/i/2012/264/2/e/avatar_angelina_by_edit_express-d34muar.jpg" />
					<MenuItem>Wallets</MenuItem>
					<MenuItem>Settings</MenuItem>
				</Drawer>
			</div>
			
		)
	}
}