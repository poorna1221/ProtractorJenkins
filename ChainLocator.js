describe('ChainLocator', function(){
	
	function calculator(a,opr,b)
	{
		if(opr=="+")
			{
				element(by.model("first")).sendKeys(a);
				
				element(by.model("operator")).element(by.css("option[value='ADDITION']")).click();
				element(by.model("second")).sendKeys(b);
				
				element(by.id("gobutton")).click();
			}
	      	
	    	if(opr=="/")
			{
				element(by.model("first")).sendKeys(a);
				
				element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();
				element(by.model("second")).sendKeys(b);
				
				element(by.id("gobutton")).click();
			}
	    	
	    	if(opr=="%")
			{
				element(by.model("first")).sendKeys(a);
				
				element(by.model("operator")).element(by.css("option[value='MODULO']")).click();
				element(by.model("second")).sendKeys(b);
				
				element(by.id("gobutton")).click();
			}
	    	
	    	if(opr=="*")
			{
				element(by.model("first")).sendKeys(a);
				
				element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
				element(by.model("second")).sendKeys(b);
				
				element(by.id("gobutton")).click();
			}
	    	
	    	if(opr=="-")
			{
				element(by.model("first")).sendKeys(a);
				
				element(by.model("operator")).element(by.css("option:nth-child(5)")).click();
				element(by.model("second")).sendKeys(b);
				
				element(by.id("gobutton")).click();
			}
		
	}
	
	it('Repeater', function(){
	
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		calculator(3,"+",4);
		calculator(10,"/",2);
		calculator(10,"%",2);
		calculator(10,"*",2);
		calculator(10,"-",2);
		
			element.all(by.tagName("option")).each(function(value){
			
				value.getAttribute("value").then(function(value2){
					console.log("Operatoars are"+value2);
				})
		});
				 
					
	/*	element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(value){
			
			console.log("value is" +value);
			expect(value).toBe("7");
		});*/
		
						
						element.all(by.repeater("result in memory")).count().then(function(value){
							console.log("Count is"+value);
							
						});
						
		element.all(by.repeater("result in memory")).each(function(value){
			
		value.element(by.css("td:nth-child(3)")).getText().then(function(value)
					
			{
				console.log("value is" +value);
			});
			
	})
		
		element.all(by.repeater("result in memory")).first().element(by.css("td:nth-child(3)")).getText().then(function(firstvalue){
			
			console.log("firstvalue"+firstvalue);
		})
		
		
	element.all(by.repeater("result in memory")).get(1).element(by.css("td:nth-child(3)")).getText().then(function(secondvalue){
			
			console.log("secondvalue"+secondvalue);
		})
		
		element.all(by.repeater("result in memory")).last().element(by.css("td:nth-child(3)")).getText().then(function(lastvalue){
			
			console.log("lastvalue"+lastvalue);
		})
		
	})
	
	
})