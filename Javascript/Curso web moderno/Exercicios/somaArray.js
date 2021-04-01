function desoma(nums){
    const qntnums = nums.length

return (qntnums === 0) ? 0 : nums[0] + desoma(nums.slice(1))
}

console.log(desoma([1,2,3,4,5,6]))
