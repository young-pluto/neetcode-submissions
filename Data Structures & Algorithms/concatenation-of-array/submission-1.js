class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length*2);
        let i=0;
        do{
    
          ans[i] = nums[i];
          ans[i+nums.length] = nums[i];
          i++;
       
        }
        while(i<nums.length);

        return ans;
        
    }
}
