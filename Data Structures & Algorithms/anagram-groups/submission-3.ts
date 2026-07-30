class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

const map = new Map<string, string[]>()
const output : string[][] = []

for (const str of strs) {
    const temp = str.split("").sort()
    const sorted = temp.join("")
    
    if (map.has(sorted)) {
        const outputArray = map.get(sorted)!
        outputArray!.push(str)
        map.set(sorted, outputArray)
    } else {
        map.set(sorted, [str])
    }

}

for (const [key, value] of map) {
   output.push(value)
} 
return output
    }
}
