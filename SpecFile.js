describe('TestSuiteProtractor', function(){
	
	
	it('FirstTC', function(){
		
		//browser.waitForAngularEnabled(false);  write this if you are working on non angular pages. as protracotr by deafult waits until
		//all the objects are loaded in the page.
		
		browser.get('https://www.google.com/');
		 browser.get('http://juliemr.github.io/protractor-demo/');
		 
		 element(by.model("first")).sendKeys(3);
		element(by.model("second")).sendKeys(4).then(function()
				{
			
			browser.sleep(3000);
				});

		element(by.id("gobutton")).click().then(function()
				{
			browser.sleep(3000);
				});
		
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log("value is" +text);
			
		});
		
		
		//browser.sleep(3000);
		
		
		
	});
	
	
});

//first parameter is test suite name & 2nd parameter is function which will have all test(it blocks)

//Describe is TestSuite(Collection of TestCases)
//it is testcase Both of these are defined in spec file with extension as .js


