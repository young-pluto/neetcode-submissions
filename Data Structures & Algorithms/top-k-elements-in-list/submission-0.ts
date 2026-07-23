class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number,number>()
        const output = new Array<number>
        

        for(const x of nums){
             
              map.set(x, (map.get(x) ?? 0) + 1)
            
              
        }
       
      const sortedMap = new Map(
    [...map].sort((a, b) => b[1] - a[1])
);

for (const [key, value] of sortedMap) {
    if (k > 0) {
        output.push(key)
        k--
    }
}
return output
}
}