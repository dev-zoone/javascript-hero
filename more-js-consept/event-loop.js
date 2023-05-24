//  EVENT LOOP FOR STACK DATA STRACTURE (ASYNCRONUS)
function a(){
    console.log("a")
    b()
    console.log("aa")
}
function b(){
    console.log("b")
    c()
    console.log("bb")
}
function c(){
    console.log("c")
    console.log("cc")
}
function x(){
    console.log("x")
    y()
    console.log("xx")
}
function y(){
    console.log("y")
    z()
    console.log("yy")
}
function z(){
    console.log("z")
    console.log("zz")
}

a()
x()


function foo(b) {
    const a = 10;
    return a + b + 11;
  }
  
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  
  const baz = bar(7); // assigns 42 to baz

  console.log(baz)

