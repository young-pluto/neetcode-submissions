class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  majorityElement(nums) {
    const map = {};
    let maxCount = 0;
    let majorityElement = nums[0];
    
    // Count frequencies
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
        
        // Update majority element if current element has higher count
        if(map[nums[i]] > maxCount) {
            maxCount = map[nums[i]];
            majorityElement = nums[i];
        }
    }
    
    return majorityElement;
    }
}
