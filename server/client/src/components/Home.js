import React, { Component } from 'react';
class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div
					style={{
						backgroundColor: '#29B6F6',
						width: '100%',
						height: '20em'
					}}>
					<h1
						className="text-center"
						style={{ color: 'white', paddingTop: '2%', fontSize: '8em' }}>
						BookJump
					</h1>
					<h2 className="text-center" style={{ color: 'white' }}>
						The first rule of bookjump is that dont talk about bookjump
					</h2>
				</div>
				<div>
					<h1 className="text-center">Features</h1>
					<h2 className="text-center">
						There are many (maybe written when completed!)
					</h2>
				</div>
			</div>
		);
	}
}

export default Home;
