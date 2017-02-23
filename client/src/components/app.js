import React, { Component } from 'react';
import NavBarHeader from './nav';
import BandList from '../container/BandList';
import ItemList from '../container/ItemList';

	export default class App extends Component {
  		render() {
    			return (
      				<div>
      					<NavBarHeader />
                <ItemList/>
                <BandList />
      				</div>
    			);
  		}
	}
