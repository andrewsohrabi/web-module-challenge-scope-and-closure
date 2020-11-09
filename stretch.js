(function(){
    var a = b = 3;
  })();
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

//   var addSix = createBase(6);
//   addSix(10); // returns 16
//   addSix(21); // returns 27

  function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  console.log(addSix)
  console.log(addSix(10));
  console.log(addSix(21));