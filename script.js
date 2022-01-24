let loop = 20;

for (let i = 0; i <= loop; i++) {
        console.log(i);
    
}


let printNumbersTill = number => {
    for (let i = 0; i <= number; i++) {
        console.log(i); 
    }
}
printNumbersTill(20);

let getGreetingTo = name => {
    return ("'Hello ") + name + ("!'")
    }
  
  getGreetingTo('Mark'); 
  
  console.log(getGreetingTo('Mark'));
  
  
  let printValues = (line) => {
    for (let i = 0; i < line.length; i++) {
      console.log(line[i]);
    }
  };
  printValues([0, 3, 6, 7, 9]);
  
  let printNewValues = [0, 3, 6, 7, 9];
  
  printNewValues.forEach((block) => {
    console.log(block);
  });
  


