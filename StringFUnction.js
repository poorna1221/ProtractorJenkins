var a = "$.100000"
	var b = "$.320000"
		var c = "$.220000"
			
			var x = a.split(".");
var y = b.split(".");
var z = c.split(".");
var x1 = Number(x[1]);
var y1 = Number(y[1]);
var z1 = Number(z[1]);

var sum = x1+y1+z1;


console.log(sum);