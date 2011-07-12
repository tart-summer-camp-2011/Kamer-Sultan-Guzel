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

			describe("An e-mail like 'osman.yuksel@tart.com.tr' should be validated", function(){
                it("should return: valid with osman.yuksel@tart.com.tr", function(){
                    var result = validation.isValidEmail("osman.yuksel@tart.com.tr");
                    expect(result).toEqual("valid");
                });

                it("should return: valid with john_doe@doe.co.uk", function(){
                    var result = validation.isValidEmail("john_doe@doe.co.uk");
                    expect(result).toEqual("valid");
                });

            });

            describe("An e-mail like 'osman.yuksel@tart' should not be validated", function(){
                it("should return: invalid with osman.yuksel@tart", function(){
                    var result = validation.isValidEmail("osman.yuksel@tart");
                    expect(result).toEqual("invalid");
                });

            });

            describe("An e-mail like 'osman.yüksel@tart.com.tr' should not be validated", function(){
                it("should return: invalid with osman.yüksel@tart.com.tr", function(){
                    var result = validation.isValidEmail("osman.yüksel@tart.com.tr");
                    expect(result).toEqual("invalid");
                });


            });

            describe("A name and surname longer than 30 characters should not be validated", function(){
                it("should return: invalid with Osman Yüksel Osman Yüksel Osman Yüksel Osman Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman Yüksel Osman Yüksel Osman Yüksel Osman Yüksel");
                    expect(result).toEqual("invalid");
                });
             });

            describe("A name and surname with alpha numeric characters should be validated", function(){
                it("should return: valid with Osman Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman Yüksel");
                    expect(result).toEqual("valid");
                });

                 it("should return: valid with Osman Yüksel Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman Yüksel Yüksel");
                    expect(result).toEqual("valid");
                });
            });

            describe("A name and surname with non letter  characters should not be validated", function(){
                it("should return: invalid with Osman.Yüksel", function(){
                    var result = validation.isValidNameSurname("Osman.Yüksel");
                    expect(result).toEqual("invalid");
                });

                  it("should return: invalid with empty string", function(){
                    var result = validation.isValidNameSurname("");
                    expect(result).toEqual("invalid");
                });
            });


            describe("A zip code having non numeric characters should not be validated", function(){
                it("should return: invalid with abcde", function(){
                    var result = validation.isValidZipCode("abcde");
                    expect(result).toEqual("invalid");
                });
            });

            describe("A zip code with a space character should not be validated", function(){
                it("should return: invalid with 12 34", function(){
                    var result = validation.isValidZipCode("12 34");
                    expect(result).toEqual("invalid");
                });

            });



            describe("A zip code with 5 numeric characters should be validated", function(){
                it("should return: valid with 12345", function(){
                    var result = validation.isValidZipCode("12345");
                    expect(result).toEqual("valid");
                });
            });


		});

