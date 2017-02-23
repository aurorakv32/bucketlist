import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import SelectedBand from './reducer_selectedband';
import SelectedImage from './reducer_selectedimage';
import ItemReducer from './reducer_items';

//Define the properties of our Application State here
	const rootReducer = combineReducers({
  		bands: BandsReducer,
  		itemlist: ItemReducer,
  		selectedBand: SelectedBand,
  		selectedImage: SelectedImage
	});

export default rootReducer;
