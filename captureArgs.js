function addNumbers(...numbers)//(...numbers) converts to array the parameters received by the function
{
    return numbers.reduce((sum,number)=>{
      return sum + number;
    }, 0);
}
addNumbers(1,2,3,4,5,6,7,8,9,10);
