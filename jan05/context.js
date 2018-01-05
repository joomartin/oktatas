function foo() {
    this.xy = 'xy';
    console.log(this.xy);
}

function bar() {
    this.abc = 'abc';
    console.log(this.abc);
}

foo();
bar();

console.log('outer ', this.xy);