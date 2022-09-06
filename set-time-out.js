function wait() 
{
    console.log('three');
}


console.log('one');
console.log('two');
setTimeout(wait,3000);
console.log('four');
console.log('five');