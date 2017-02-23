import { Component } from 'react';
import NavBarHeader from './nav';
import Signin from './auth/signin';

	export default class App extends Component {
  		render() {
    			return (
      				<div>
      					<NavBarHeader />
                {this.props.children}
      				</div>
    			);
  		}
	}
