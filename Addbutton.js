describe('practice',function(){

	
	function phoneName(name)
	{
		
			element.all(by.css("app-card[class='col-lg-3 col-md-6 mb-3']")).each(function(list){
			list.element(by.tagName("h4")).element(by.tagName("a")).getText().then(function(phonename){
			console.log("phonename"+phonename);
			if(phonename==name)
				{
			list.element(by.buttonText("Add")).click().then(function(){
			
				browser.sleep(60000);
			});
			
				}
			
				})
			
			
			
		})
	}
	
	it('qaclickacademy',function(){
		
	browser.get("http://qaclickacademy.github.io/protocommerce/");
	
	
		element(by.linkText("Shop")).click();
		phoneName("Samsung Note 8");
	
	
/*	element(by.css("app-card[class='col-lg-3 col-md-6 mb-3']")).element(by.tagName("h4")).element(by.tagName("a")).getText().then(function(value){
	
		browser.sleep(6000);
		console.log("value is"+value);
		
	})*/
	
	})
	
})