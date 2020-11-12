// Calculate the average of the numbers in an array of numbers

function calculateAverage(arr)
{
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
        }
    let average = sum / (arr.length)
    return average;
}

let arr = [1, 5, 6];

console.log(calculateAverage(arr)); 