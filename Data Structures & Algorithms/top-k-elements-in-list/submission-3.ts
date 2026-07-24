class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let output: number[] = []

        const map = new Map<number,number>()

        for(const num of nums){
            map.set(num, (map.get(num) ?? 0) + 1)
        }

        const sorted = [...map].sort((a,b) => b[1]-a[1])

      for (const [key] of sorted) {
            console.log(key)
            output.push(key)
            if (--k === 0) break;
    }
    return output
    }
}
