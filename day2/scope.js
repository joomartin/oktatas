function a() {
    var b = 1;

    function f() {
        var f1 = 1;
        console.log(f1);        // saját scope        
        console.log(b);         // szülő scope
        console.log(c);         // nagyszülő scope
    }

    f();
}

function b() {
    var a = 10;

    if (a === 10) {
        var x = 11;
    }

    for (var i of [1,2,3]) {
        var x1 = 100;
    }

    console.log(x);
    console.log(x1);
    console.log(i);

    console.log(a);
}

var c = 1.27;

b();
// a();

// console.log(b, c);

