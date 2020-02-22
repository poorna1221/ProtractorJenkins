describe('TestSuiteProtractor', function(){
	
	
	it('AlertsNOnangular', function(){
		
		browser.waitForAngularEnabled(false);
		
		 browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		 
		 browser.driver.manage().window().maximize();
		 
		 element(by.css("a[href*='loadAjax']")).click().then(function(){
			
			browser.sleep(5000);
		 });
	
	var EC=protractor.ExpectedConditions;

	browser.wait(EC.invisibilityOf(element(by.id("loader"))),20000);
	
	element(by.id("results")).getText().then(function(result){
		
		console.log(result+"Is the output");
	})
	
		
		
	});
	
	
});