class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }

        const sorted = s.split("").sort().join("")
        const sorted1 = t.split("").sort().join("")

        for(let i=0; i<s.length; i++){
            if(sorted[i] != sorted1[i]){
                return false
            }
        }
        return true
    }
}
