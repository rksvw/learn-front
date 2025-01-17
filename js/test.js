console.log(Math.floor(53.9999))
console.log(Math.random().toString(36));
console.log(Math.floor(Math.abs(-5.99)));

var window = this;
'use-strict';
var Oh = function(D) {
    console.log(D);
}

Oh("hello");

try {
    const wow = Oh();
    wow("hello");
} catch (error) {
    console.error("There is an error");
}