describe('practice',function(){

	var obj = require("./BaseObject.js");
	var using=require('jasmine-data-provider');
	
	var data = require("./data.js");
	
	beforeEach(function(){
		
		obj.getURL();
	})
	
	
	using(data.ParentObject, function (data, description)
	{
		it('qaclickacademy'+description,function(){
			
			
			
			obj.name.sendKeys(data.name);
			obj.email.sendKeys(data.email);
			obj.pwd.sendKeys(data.Password);
			element(by.css("input[type='checkbox']")).click();
			
			element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click().then(function(){
				
			browser.sleep(5000);
			
			});
			
			element.all(by.name("inlineRadioOptions")).first().click();
			element(by.name("bday")).sendKeys("01/15/1990");
			
			element(by.name("name")).clear();
			
			element(by.name("name")).sendKeys("M").then(function(){
				element(by.css("div[class='alert alert-danger']")).getText().then(function(error){
					browser.sleep(6000);
					console.log("Error message is "+error);
				})
				
			})
			/*element(by.buttonText("Submit")).click().then(function(){
				browser.sleep(6000);
				console.log("Saved successfully");
				
			});
			
			*/
	})
	
	
	
afterEach(function() {
	console.log("Execution Completed")
})
	
	})
	
	
})
