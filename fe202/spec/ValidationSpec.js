/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 12/07/11
 * Time: 3:37 AM
 * To change this template use File | Settings | File Templates.
 */

describe("Validation Class to validate e-mails, name&surname and zip code formats", function() {
    var validation;
    beforeEach(function (){
	    validation = new Validation();
	});

	describe("Email validation", function(){
            describe("An e-mail like 'osman.yuksel@tart.com.tr' should be validated", function(){
                it("should return: true with osman.yuksel@tart.com.tr", function(){
                    var result = validation.isValidEmail("osman.yuksel@tart.com.tr");
                    expect(result).toBeTruthy();
                });

                it("should return: true with john_doe@doe.co.uk", function(){
                    var result = validation.isValidEmail("john_doe@doe.co.uk");
                    expect(result).toBeTruthy();
                });

            });

            describe("An e-mail like 'osman.yuksel@tart' should not be validated", function(){
                it("should return: false with osman.yuksel@tart", function(){
                    var result = validation.isValidEmail("osman.yuksel@tart");
                    expect(result).toBeFalsy();
                });

            });

            describe("An e-mail like 'osman.yüksel@tart.com.tr' should not be validated", function(){
                it("should return: false with osman.yüksel@tart.com.tr", function(){
                    var result = validation.isValidEmail("osman.yüksel@tart.com.tr");
                    expect(result).toBeFalsy();
                });


            });
    });

    describe("Name and surname validation", function(){
            describe("A name and surname longer than 30 characters should not be validated", function(){
                it("should return: false with Osman Yüksel Osman Yüksel Osman Yüksel Osman Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman Yüksel Osman Yüksel Osman Yüksel Osman Yüksel");
                    expect(result).toBeFalsy();
                });
             });

            describe("A name and surname with alpha numeric characters should be validated", function(){
                it("should return: true with Osman Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman Yüksel");
                    expect(result).toBeTruthy();
                });

                 it("should return: true with Osman Yüksel Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman Yüksel Yüksel");
                    expect(result).toBeTruthy();
                });
            });

             describe("Single word entries should not be validated", function(){
                it("should return: false with Osman", function(){
                    var result = validation.isValidNameSurname("Osman ");
                    expect(result).toBeFalsy();
                });
             });


            describe("A name and surname with non letter  characters should not be validated", function(){
                it("should return: false with Osman.Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman.Yüksel");
                    expect(result).toBeFalsy();
                });

                  it("should return: false with empty string", function(){
                    var result = validation.isValidNameSurname("");
                    expect(result).toBeFalsy();
                });
            });
    });

     describe("Zip code validation", function(){

            describe("A zip code having non numeric characters should not be validated", function(){
                it("should return: false with abcde", function(){
                    var result = validation.isValidZipCode("abcde");
                    expect(result).toBeFalsy();
                });
            });

            describe("A zip code with a space character should not be validated", function(){
                it("should return: false with 12 34", function(){
                    var result = validation.isValidZipCode("12 34");
                    expect(result).toBeFalsy();
                });

            });



            describe("A zip code with 5 numeric characters should be validated", function(){
                it("should return: true with 12345", function(){
                    var result = validation.isValidZipCode("12345");
                    expect(result).toBeTruthy();
                });
            });
     });


});

