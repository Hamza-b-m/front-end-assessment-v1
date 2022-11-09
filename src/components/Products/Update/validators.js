import {timestampToDays} from '../../../utils';

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isExpirationDateValid = (value) => {
	if (value) {
	const diff = timestampToDays(Date.parse(value)) - timestampToDays(Date.now())
	return diff >= 30
}
}