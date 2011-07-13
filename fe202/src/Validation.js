/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 12/07/11
 * Time: 3:39 AM
 * To change this template use File | Settings | File Templates.
 */

/*
* @fileoverview Validation class to test if given user name and surname, e-mail address,
* and zip code are in expected format. 
* */

var Validation = function() {

};

      Validation.prototype.isValidEmail = function (inputString){
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(inputString);
		};

		Validation.prototype.isValidNameSurname = function (inputString){
            //case: if string bigger than 30 characters
            if (inputString.length >= 30 || inputString.indexOf(' ') <= 0 || inputString.indexOf(' ') == inputString.length-1){
                return false;
            } else {
                return util.string.isAlphaChar(inputString);
            }
		};

		Validation.prototype.isValidZipCode = function (inputString){
            if(inputString.indexOf(' ') > 0 || inputString.length != 5){
                return false;
            } else {
                return util.string.isNumericChar(inputString);
            }

		};