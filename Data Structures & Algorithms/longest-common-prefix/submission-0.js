class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length == 1){
            return strs[0];
        }
        let temp = strs[0];
        let stringJ = "";
        let flag = 0;

        for(let i=1; i<strs.length; i++){
              
              let stringS = "";
              for(let j=0; j<strs[i].length; j++){
                if(temp[j] != strs[i][j]){
                     break;
                }
                else{
                    stringS = stringS + temp[j]; 
                }
              }
              if(stringJ.length >= stringS.length || flag == 0){
                flag =1;
             stringJ = stringS;}
        }

        return stringJ; 

    }
}
