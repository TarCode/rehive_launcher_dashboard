import React from 'react'
import Paper from 'material-ui/Paper';

export default () => (
	<div>
		<h2>Wallet</h2>
		<div className='row'>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<p>Balance</p>
						<h1>GUT 2300.3459</h1>
					</div>
				</Paper>
			</div>
			<div className='col-12'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Fund</h3>
					</div>
				</Paper>
			</div>
		</div>
	</div>
)

const style = {
	height: 155,
	width: '100%',
	margin: 10,
	textAlign: 'center',
	display: 'inline-block',
};