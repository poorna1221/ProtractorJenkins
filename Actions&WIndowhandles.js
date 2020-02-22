describe('TestSuiteProtractor', function(){
	
	
	it('Actions', function(){
		
		//browser.waitForAngularEnabled(false);  write this if you are working on non angular pages. as protracotr by deafult waits until
		//all the objects are loaded in the page.
		

		 browser.get('http://posse.com/search?searchType=awesomeness&latSW=1.2164836566267732&lngSW=103.7989451018334&latNE=1.412812483712306&lngNE=103.89175489816671');
		 
		// browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
		// browser.actions().sendKeys(protractor.key.ARROW_DOWN).perform();
		// browser.actions().sendKeys(protractor.key.ENTER).perform().then(function() {
		// 	browser.sleep(5000);
			 
		// });
		 
		 
	/*	 element.all(by.css("div[class='panel panel-default resultPanel']")).count().then(function(countis){
			 console.log("count is"+countis);
		 
			 element(by.css("div[class='leftContentFooter hidden-xs']")).element(by.css("span[class='ng-binding']")).getText().then(function(FooterCount){
				 console.log("FooterCount is"+FooterCount);
				expect(countis).toEqual(FooterCount); 
				 
			 })
		 
		 });
		 */
		 
		 
		browser.getTitle().then(function(firstTitle){
				
				console.log(firstTitle);
			})
			
			
		 element.all(by.css("div[class='panel panel-default resultPanel']")).get(1).element(by.css("span[ng-bind*='searchResult.place.name']")).click().then(function(){
			 
			 
			browser.sleep(6000); 
			
	
			
			
			browser.getAllWindowHandles().then(function(handles) {
				
			
				browser.switchTo().window(handles[1]);
				
				browser.getTitle().then(function(secondTitle){
					
					console.log(secondTitle);
				})
			})
			
			
		 })
		 
		 
	})
	
	
})