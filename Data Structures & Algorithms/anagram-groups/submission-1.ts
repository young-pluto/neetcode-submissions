class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
groupAnagrams(strs: string[]): string[][] {

    const output: string[][] = [];

    const map = new Map<string, string[]>();

    for (const str of strs) {
        const arr = str.split("")
        arr.sort()
        const temp = arr.join("")

        const x = map.get(temp)
        if (x) {
            x.push(str)
        } else {
            map.set(temp, [str])
        }
    }
    for (const [key, value] of map) {
        output.push(value)
    }
    return output



}
}
