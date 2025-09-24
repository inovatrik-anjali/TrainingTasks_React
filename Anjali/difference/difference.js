//program to demonstrate difference between for and array filter method find odd numbers
const Numbers=[1,2,3,4,5,6,7];
let oddnumber=[];
for(let i=0;i<Numbers.length;i++)
{
    if(Numbers[i]%2==1)
    {
       oddnumber.push(Numbers[i]);
    }
}
    console.log("odd numbers are:",oddnumber);

//same thing using fillter mentod
const oddnumber1= Numbers.filter(Numbers=>Numbers%2==1);
console.log(oddnumber1);