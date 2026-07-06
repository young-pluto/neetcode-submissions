class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let k = 0;
        let j = s.length-1;

        while(k<=j){
            let char = s[k];
            s[k] = s[j];
            s[j] = char;
            k++;
            j--;
        }
    }
}
