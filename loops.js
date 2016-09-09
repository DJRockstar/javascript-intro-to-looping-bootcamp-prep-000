function forLoop(array){
  for (var i=0; i<25; i++){
      array.push(`I am ${i} strange loop.`);

  }
  return array; //Return has to be outside the loop else the loop will break and prog will jump outside the function after 1st iterations.
}

function whileLoop(number){
  while(number > 0){
    console.log(number);
    number--;
  } return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
  }while(array.length>0 && maybeTrue());
  return array;
}
