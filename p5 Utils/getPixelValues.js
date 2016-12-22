// Check if pixel is part of the red channel - if so, return value else return false
function _getRed(pixIndex){
	if (pixIndex % 4 === 0){
		return pixels[pixIndex];
	} else {
		return false;
	}
}

// Check if pixel is part of the green channel - if so, return value else return false
function _getGreen(pixIndex){
	if (pixIndex % 4 === 1){
		return pixels[pixIndex];
	} else {
		return false;
	}
}

// Check if pixel is part of the blue channel - if so, return value else return false
function _getBlue(pixIndex){
	if (pixIndex % 4 === 2){
		return pixels[pixIndex];
	} else {
		return false;
	}
}

// Check if pixel is part of the alpha channel - if so, return value else return false
function _getAlpha(pixIndex){
	if (pixIndex % 4 === 3){
		return pixels[pixIndex];
	} else {
		return false;
	}
}