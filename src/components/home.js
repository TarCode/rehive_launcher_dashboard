import React from 'react'
import Paper from 'material-ui/Paper';

export default () => (
	<div>
		<h2>Dashboard</h2>
		<div className='row'>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h1>Balance</h1>
					</div>
				</Paper>
			</div>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h1>Refer</h1>
					</div>
				</Paper>
			</div>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h1>Redeem</h1>
					</div>
				</Paper>
			</div>
		</div>
	</div>
)

const style = {
	height: 116,
	width: '100%',
	margin: 10,
	textAlign: 'center',
	display: 'inline-block',
};