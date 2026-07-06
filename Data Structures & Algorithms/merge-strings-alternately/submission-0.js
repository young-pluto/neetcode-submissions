class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let str = "";

        let j=0;

        while(j<word1.length || j<word2.length){
           
            str = str + word1[j] + word2[j];
            j++;

            if(j=== word1.length){
                while(j<word2.length){
                    str = str + word2[j];
                    j++;
                }
                break; 
            }
            if(j=== word2.length){
                while(j<word1.length){
                    str = str + word1[j];
                    j++;
                }
                break; 
            }
        }

        return str;
    }
}
