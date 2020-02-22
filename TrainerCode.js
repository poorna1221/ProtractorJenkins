describe('Actions demo',function() {  


it('Open Posse website',function() {
//moving the mouse into that textbox
//sendkeys
//keyboard arrow
//Keyboard enter
browser.get("https://posse.com/");
element(by.model("userInputQuery")).sendKeys("river");
browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();



browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
{

browser.sleep(2000);

expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);


element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
element(by.css("a[ng-href*='London/River Island']")).click().then(function()
{
browser.sleep(2000);
})






})




//another code below


browser.waitForAngularEnabled(false);
browser.get("http://qaclickacademy.com/practice.php");
element(by.id("confirmbtn")).click();

browser.switchTo().alert().dismiss().then(function()

{
//10sec
browser.sleep(5000);
})


//different code alerts

describe('Protractor Alert steps',function() {  

function selectItems(product)
{
//take 4 cards into list
//go through each index in the list - and get the title= if title =desired title then in that index i will select add button
element.all(by.tagName("app-card")).each(function(item)
{

item.element(by.css("h4 a")).getText().then(function(text)
{
if(text=="Samsung Note 8")
{
item.element(By.css("button[class*='btn-info']")).click();
}
}) })
}
it('Open NonAngular js website Alerts',function() {


browser.get("https://qaclickacademy.github.io/protocommerce/");

element(by.name("name")).sendKeys("Mystudents");
element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
element(by.id("exampleInputPassword1")).sendKeys("password2");
element(by.css("input[type='checkbox']")).click();
element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
element.all(by.name("inlineRadioOptions")).first().click();
element(by.buttonText("Submit")).click().then(function()
{
element(by.css("div[class*='success']")).getText().then(function(text)
{
console.log(text);
})
})
element(by.name("name")).clear();
element(by.name("name")).sendKeys("M").then(function()
{
element(by.css("[class='alert alert-danger']")).getText().then(function(text)
{
console.log(text);
})
})
element(by.linkText("Shop")).click();
selectItems("Samsung Note 8");
selectItems("iphone X");

element(by.partialLinkText("Checkout")).getText().then(function(text)
{
var res=text.split("(");
var x=Number(res[1].trim().charAt(0));


var y=x+1;
console.log(y);
expect(res[1].trim().charAt(0)).toBe(y);
})

})

})






})
})


