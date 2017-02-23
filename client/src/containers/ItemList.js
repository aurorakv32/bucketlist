import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';

class ItemList extends Component {
	renderList(){
		return this.props.items.map((items, category, finishBy) => {
			return (
				<div>
				<td key={items.items} className="list-group col-sm-4">{items.items}</td>
				<td key={items.category} className="list-group col-sm-4">{items.category}</td>
				<td key={items.finishBy} className="list-group col-sm-4">{items.finishBy}</td>
				</div>
			);
		});
	}

	render(){
		return this.props.items.map((items, category, finishBy) => {
			return (
			<BootstrapTable data={items, category, finishBy} striped>
				<TableHeaderColumn className="list-group col-sm-4" dataField='items' isKey={true}>Item</TableHeaderColumn>
				<TableHeaderColumn className="list-group col-sm-4" dataField='category'>Category</TableHeaderColumn>
				<TableHeaderColumn className="list-group col-sm-4" dataField='finishBy'>Finish By</TableHeaderColumn>
				{this.renderList()}
			</BootstrapTable>
			);
		});
	}
}

function mapStateToProps(state){
	return {
		items: state.items,
		category: state.category,
		finishBy: state.finishBy
	};
}

export default connect(mapStateToProps)(ItemList);