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

      Validation.prototype.isValidEmail = function (string){
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (emailPattern.test(string)){
                return "valid";
            } else {
                return "invalid";
            }
		};

		Validation.prototype.isValidNameSurname = function (string){
            //case: if string bigger than 30 characters
            if (string.length >= 30 ){
                return "invalid";
            //case: string smaller than 30, but has non alpha  characters
            } else if (util.string.isAlphaChar(string)){
                    return "valid";
            } else {
                return "invalid";
            }

		};

		Validation.prototype.isValidZipCode = function (string){
             if (util.string.isNumericChar(string)){
                    return "valid";
            } else {
                return "invalid";
            }

		};