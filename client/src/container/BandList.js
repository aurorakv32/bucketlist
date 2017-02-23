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
	renderImage(){
		return this.props.image.map((image) =>{
			return (
				<img src={image.img} onClick={() => this.props.selectImage(image)}/>
			);
		});
	}
	render() {
		return (
			<div>
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			
			<h1>Details for:</h1>
			<ul>
				{this.renderImage()}
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
		image: state.image
	};
}

//All things returned from this function will end up as props on the BandList container.
//We need this so we can call the selectBand function above through this.props.selectBand
//That will start the action >> reducer >> state change process
function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectBand: selectBand }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);