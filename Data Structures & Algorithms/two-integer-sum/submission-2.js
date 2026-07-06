class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for(let i=0; i<nums.length; i++){
            let key = target-nums[i];

            if(key in map && i!= map[key]){
                return [i,map[key]];
            }
            else{
                map[nums[i]] = i; 
            }
        }

    }
}
