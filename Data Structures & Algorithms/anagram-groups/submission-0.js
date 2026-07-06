class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const mapsArray = [];

        for(let i=0; i<strs.length; i++){
            let currentString = strs[i];
            const charMap = {};

            for(let j=0; j<currentString.length; j++){
                const charS = currentString[j];
                charMap[charS] = (charMap[charS] || 0) + 1;
            }
            mapsArray.push(charMap); 
        }

        const anagramGroups = {};

        for(let i=0; i<mapsArray.length; i++){
            const charMap = mapsArray[i];
            const mapKey = Object.keys(charMap)
            .sort()
            .map(char => char + charMap[char])
            .join('');

            if(!anagramGroups[mapKey]){
                anagramGroups[mapKey] = [];
            }
            anagramGroups[mapKey].push(strs[i]);
        }
          const result = Object.values(anagramGroups);
  
           return result;
    }
}
