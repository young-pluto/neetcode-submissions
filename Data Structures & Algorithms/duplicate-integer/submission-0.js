class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};

        for(let i=0; i<nums.length; i++){
            let key = nums[i];

            if(key in map){
                return true;
            }
            else{
                map[key] = i;
            }
        }
        return false; 
    }
}
