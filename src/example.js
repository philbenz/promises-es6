module.exports = {
  simplePromise: simplePromise,
  add10Promise: add10Promise,
  reject: reject,
  sum50: sum50

}

function simplePromise(bool) {

  return new Promise(function(resolve, reject) {
    if( bool ) {
      resolve('OK');
    } else {
      reject('BAD');
    }
  }). catch(function(err){
    return err;
  });
}

function add10Promise(num) {

  return new Promise(function(resolve, reject) {
    if (num != 10) {
    if (isNaN(num)){
      num = 0;
    }
    resolve(num + 10);
  } else {
    reject(10);
  }
  });
}

function reject(num) {
  return new Promise(function(resolve, reject) {
    if ( isNan(num)) {
      resolve(num);
    } else {
      reject(num);
    }
  }

)
}

function sum50() {

  return new Promise(function(resolve, reject) {
    resolve(50);
  });

}
