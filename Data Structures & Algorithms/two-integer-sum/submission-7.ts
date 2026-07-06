class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const map = new Map<number, number>();

        for(let i=0; i<nums.length; i++){
            map.set(nums[i],i)
        }
        for(let j=0; j<nums.length; j++){
            const complement = target-nums[j]
           if(map.has(complement) && j != map.get(complement)){
            return [j,map.get(complement)]
           }
        }
        return[0,0]
    }
}
