class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
      const n = nums.length;
      let ans = new Array(n*2);

      for(let i=0; i<ans.length; i++){
        if(i<nums.length)
         ans[i] = nums[i];
         else 
         ans[i]=nums[i-nums.length];
      } 

      return ans; 

    }
}
