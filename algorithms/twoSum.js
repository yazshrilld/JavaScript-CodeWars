const result = getCount("agdidkdkd")
console.log(result)
// [10, 20, 3, 4, 5]
//80
//solved using two ethods
const twoSum = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        const diff = target - arr[i]
        const indexOfDiff = arr.indexOf(diff)
        if(indexOfDiff > -1) {
            return [i, indexOfDiff]
        }
    } 
    return []
}
const twoSumLoop = (arr, target) => {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[j] + arr[i] === target) {
                return [i, j]
            }
        }
    }
    return []
}
const res = twoSum([10, 20, 3, 4, 5], 13)
const res2 = twoSumLoop([10, 20, 3, 4, 5], 13)
console.log({res, res2})
