class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for(let i=0; i<nums.length; i++){
            map[nums[i]] = i; 
        }

        for(let i=0; i<nums.length; i++){
            let key = target-nums[i];

            if(key in map && i!= map[key]){
                return [i,map[key]];
            }
        }

        return [0,0];
    }
}
