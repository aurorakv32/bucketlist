import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import { reducer as formReducer } from 'redux-form';
// import BucketListReducer from './reducer_bucketlist';
// import ItemReducer from './reducer_items';


import SelectedBand from './reducer_selectedband';
import SelectedImage from './reducer_selectedimage';


//Define the properties of our Application State here
	const rootReducer = combineReducers({
  		// bands: BandsReducer,
  		// // items: ItemReducer
  		// // bucketlist: BucketListReducer,
  		// selectedBand: SelectedBand,
  		// selectedImage: SelectedImage
  		form: formReducer
	});

export default rootReducer;
