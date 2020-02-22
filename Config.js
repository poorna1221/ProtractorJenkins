var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
 //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Alerts.js'],

onPrepare :function()
{
	browser.driver.manage().window().maximize();
	 jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
}/*,

suites:
	{
	smoke: 'Practice.js',
	Regression: 'Alerts.js'
	},
jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }*/
};

