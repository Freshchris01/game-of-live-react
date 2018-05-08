import React from 'react';



class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cols: 10,
			rows: 10,
			grid: [
			],
			running: false
		}
	}

	render() {

		let grid = [];

		for (let y = 0; y < this.state.rows; y++) {
			grid.push([]);
			for (let x = 0; x < this.state.cols; x++) {
				let position = {
					left: `${40 * x}px`,
					top: `${40 * y}px`,
					position: 'absolute'
				};
				grid[y].push(
					<div key={x + "" + y}
						style={{ ...style.cell, ...style.alive, ...position }}>{x} - {y}
					</div>
				);
			}
		}

		return (
			<div style={style.container}>
				{grid}
			</div>
		);
	}
}

const style = {

	container: {
		width: '100%'
	},

	cell: {
		height: '40px',
		width: '40px',
		border: '1px solid black'
	},

	alive: {
		backgroundColor: 'green'
	},

	dead: {
		backgroundColor: 'red'
	}
}


export default Game;