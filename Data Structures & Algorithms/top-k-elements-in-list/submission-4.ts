class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>()

for (const num of nums) {

    freqMap.set(num, (freqMap.get(num) ?? 0) + 1)
}

console.log(freqMap)

const elements = [...freqMap.entries()].sort((a, b) => b[1] - a[1]).map(([num]) => num)


const x = elements.slice(0, k)
return x
    }
}
