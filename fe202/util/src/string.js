/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 12/07/11
 * Time: 3:36 AM
 * To change this template use File | Settings | File Templates.
 */


var util = {};
util.string = {};

        util.string.isAlphaChar = function (inputString){
          // for now this works for name and surname combinations w/ a space in between.
          //return /[A-Za-z]+\s+[A-Za-z]/.test(inputString);
          return /[A-Za-z]/.test(inputString);

          //will code regexp free version later.
        };

        // This function does not check fr white spaces
        util.string.isNumericChar = function (inputString){
            var numArray = [1,2,3,4,5,6,7,8,9,0];
            for (var i = 0; i < inputString.length; i++){
                var isSuccess = false;
                for (var j = 0; j < numArray.length; j++){
                    if (inputString.charAt(i) == numArray[j]){
                        isSuccess = true;
                        break;
                    }
                }
                if (isSuccess == false) {
                    return false;
                }
            }
            return true;
        };