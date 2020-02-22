function car()
{

	this.color = "red";
	this.engine = "turbo";
	this.brand = "MAZDA";
	this.name = element(by.name("name"))
	this.email = element(by.css("input[name='email']"))
	this.pwd = element(by.id("exampleInputPassword1"))
	
	
	this.getURL = function()
	{
		
		browser.get("http://qaclickacademy.github.io/protocommerce/");
	}
}

//var a = new car();
//a.getModel();

module.exports = new car();