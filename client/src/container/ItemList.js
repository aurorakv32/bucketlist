import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class ItemList extends Component {
	renderList() {
		return this.props.itemlist.map(itemlist => {
			return (
				<tr key={itemlist.items}>
					<td>{itemlist.items}</td>
					<td>{itemlist.category}</td>
					<td>{itemlist.finishBy}</td>
				</tr>
			);
		})
	}

	render(){
		return (
			<Table striped>
				<thead>
					<tr>
						<th>Item</th> 
						<th>Category</th>
						<th>Finish By</th>
					</tr>
				</thead>
				<tbody>
					{this.renderList()}
				</tbody>
			</Table>
		);
	}
}

function mapStateToProps(state){
	return {
		itemlist: state.itemlist
	};
}

export default connect(mapStateToProps)(ItemList);