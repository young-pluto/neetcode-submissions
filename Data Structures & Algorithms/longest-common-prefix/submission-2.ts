class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
         
     let prefix: string = ""
let currPrefix: string = ""
let i: number = 0
let flag: number = 0

while (i < strs[0]!.length) {
    currPrefix = strs[0]![i]!

    for (const stri of strs) {
        if (stri[i] !== currPrefix) {
            flag = 1
            break
        }
    }
    if (flag === 1) { break }
    prefix = prefix + currPrefix

    i++


}
return prefix
    }
}
