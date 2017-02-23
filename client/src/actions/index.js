//selectBand is an ActionCreator.
//It returns an action that has to be object with a type property

const SELECT_BAND = 'SELECT_BAND';
const SELECT_IMAGE = 'SELECT_IMAGE';

export function selectBand(band) {
	console.log("You have selected: ", band.name);
	return {
		type: SELECT_BAND, 
		payload: band
	};
}

export function selectImage(image) {
	return {
		type: SELECT_IMAGE,
		payload: image
	};
}