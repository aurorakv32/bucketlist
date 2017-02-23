import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBand, selectImage } from '../actions/index';
import { bindActionCreators } from 'redux';

class BandList extends Component {
	renderList(){
		return this.props.bands.map((bands) =>{
			return (
			<li key={bands.name} onClick={() => this.props.selectBand(bands)} className="list-group-item">{bands.name}</li>
			);
		});
	}

	render() {
		return (
			<div>
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>

			</div>
		);
	};
}

//takes app state as arg.
//whatever gets returned will show up as props inside of band list

function mapStateToProps(state){
	return {
		bands: state.bands,
	};
}

//All things returned from this function will end up as props on the BandList container.
//We need this so we can call the selectBand function above through this.props.selectBand
//That will start the action >> reducer >> state change process
function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectBand: selectBand }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);