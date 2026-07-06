class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length){
            return false;
        }

        const mapS = {};
        const mapT = {};

        for(let i=0; i<s.length; i++){
            const charS = s[i];
            const charT = t[i];

            mapS[charS] = (mapS[charS] || 0) + 1;
            mapT[charT] = (mapT[charT] || 0) + 1;
        }

        for(let key in mapS){
            if(mapS[key] !== mapT[key]){
                return false;
            }
           
        }
        return true; 
    }
}
