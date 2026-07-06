class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];

        for(let i=1; i<strs.length; i++){
            const currString = strs[i];
            let tempPrefix = ""
            for(let j=0; j<prefix.length; j++ ){
                
                if(prefix[j] === currString[j]){
                  tempPrefix = tempPrefix + prefix[j];
                }
                else{
                    prefix = tempPrefix;
                    break;
                }
            }
        }
        return prefix;
    }
}
