import React from 'react'
import Paper from 'material-ui/Paper';

export default () => (
	<div>
		<h2>Markets</h2>
		<div className='row'>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Market 1</h3>
					</div>
				</Paper>
			</div>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Market 2</h3>
					</div>
				</Paper>
			</div>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Market 3</h3>
					</div>
				</Paper>
			</div>
			<div className='col-6'>
				<Paper style={style} zDepth={3}>
					<div className='container'>
						<h3>Market 4</h3>
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