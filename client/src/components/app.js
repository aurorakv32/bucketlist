import React, { Component } from 'react';
import NavBarHeader from './nav';
import BandList from '../container/BandList';

	export default class App extends Component {
  		render() {
    			return (
      				<div>
      					<NavBarHeader />
                <BandList />
      				</div>
    			);
  		}
	}
