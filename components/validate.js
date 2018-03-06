import Radium from 'radium';
import React from 'react';

export function validateInput(type, value) {
	if (type === 'email' && value.length > 0){
		return /^(.+@.+\..+)$/.test(value) === false;
	}
	else if (type === 'password' && value.length > 0) {
		return /^[a-zA-Z0-9_-]{4,16}$/.test(value) === false;
	}
	else {
		return false;
	}
}