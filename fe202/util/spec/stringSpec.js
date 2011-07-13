/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 12/07/11
 * Time: 10:43 AM
 * To change this template use File | Settings | File Templates.
 */

describe ("String class to test type of given characters", function(){
    describe ("Testing alpha characters", function(){
        describe("A string made of alpha characters should return true", function(){
            it("should return true with abc abc", function(){
                expect(util.string.isAlphaChar("abc abc")).toBeTruthy();
            });
        });
    });

    describe ("Testing numeric characters", function (){
        describe("A string made of entirely numeric characters should return true", function(){
            it ("should return true with 1234", function(){
                expect(util.string.isNumericChar("1234")).toBeTruthy();
            });
        });

        describe("A string made of numeric characters and alpha characters should return false", function(){
            it("should return false with 12a34", function(){
                expect(util.string.isNumericChar("12a34")).toBeFalsy();
            });
        });
        
    });

    
});