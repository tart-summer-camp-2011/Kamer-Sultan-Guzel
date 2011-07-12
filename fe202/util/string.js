/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 12/07/11
 * Time: 3:36 AM
 * To change this template use File | Settings | File Templates.
 */

//var util = function(){};
var util = {};

        util.string.isAlphaChar = function (string){
          //  var turkishAlphabet = ["a", "b", "c", "ç", "d",e,f,g,ğ,h,ı,i,j,k,l,m,n,o,ö,p,r,s,ş,t,u,ü,v,y,z];
          return /[A-Za-z]+\s+[A-Za-z]/.test(string);

            /*
           * tried to code this myself instead of using regular expressions,
           * but don't know how to store and handle Turkish chars in an array
           * at the first place
           * /
           /*var turkishAlphabet = [a, b, c, ç, d,e,f,g,ğ,h,ı,i,j,k,l,m,n,o,ö,p,r,s,ş,t,u,ü,v,y,z];
            for (var i = 0; i < string.length, i++){
                    for (var j = 0; j < turkishAlphabet.length, j++){
                        if (string.charAt(i) == turkishAlphabet[j]){
                           return true;
                        }
                        else{
                            return false;
                        }
                    }
                }*/
        };

        util.string.isNumericChar = function (string){
            var numArray = [1,2,3,4,5,6,7,8,9,0];

            for (var i = 0; i < string.length; i++){
                var isSuccess = false;
                for (var j = 0; j < numArray.length; j++){
                    if (string.charAt(i) == numArray[j]){
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