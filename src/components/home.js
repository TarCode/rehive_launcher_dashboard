import React from 'react'
import Paper from 'material-ui/Paper';

export default () => (
	<div>
		<h2>Dashboard</h2>
		<div className='row'>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Balance</h3>
					</div>
				</Paper>
			</div>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Refer</h3>
					</div>
				</Paper>
			</div>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Redeem</h3>
					</div>
				</Paper>
			</div>
		</div>
	</div>
)

const style = {
	height: 80,
	width: '100%',
	margin: 10,
	textAlign: 'center',
	display: 'inline-block',
};