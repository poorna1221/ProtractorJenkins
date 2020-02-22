describe('TestSuiteProtractor', function(){
	
	
	it('AlertsNOnangular', function(){
		
		browser.waitForAngularEnabled(false);
		
		 browser.get('http://www.qaclickacademy.com/practice.php');
	
		element(by.id("confirmbtn")).click().then(function(){
			browser.sleep(8000);
		});
		
		browser.switchTo().alert().accept().then(function(text){
			
			console.log("Alert Text" +text);
			browser.sleep(5000);
		});
		
		
	
		
		
	});
	
	
});