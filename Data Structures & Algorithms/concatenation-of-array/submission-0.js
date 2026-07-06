class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        let j=0; 
        for(let i=0; i<2*nums.length; i++){
            if(j==nums.length){
                j=0;
            }
            ans[i] = nums[j];
            j++;
           
        }

        return ans; 
    }
}
