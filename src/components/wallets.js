import React from 'react'
import Paper from 'material-ui/Paper';

export default () => (
	<div>
		<h2>Wallets</h2>
		<div className='row'>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>ABC</h3>
					</div>
				</Paper>
			</div>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>ABC</h3>
					</div>
				</Paper>
			</div>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>ABC</h3>
					</div>
				</Paper>
			</div>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>ABC</h3>
					</div>
				</Paper>
			</div>
		</div>
	</div>
)

const style = {
	height: 140,
	width: '100%',
	margin: 10,
	textAlign: 'center',
	display: 'inline-block',
};