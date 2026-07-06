class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const mapS = new Map();
        const mapT = new Map();

        for(let i=0; i<s.length; i++){
            mapS.set(s[i],1 + ( mapS.get(s[i]) ? mapS.get(s[i]) : 0));
            mapT.set(t[i],1 + ( mapT.get(t[i]) ? mapT.get(t[i]) : 0));
        }
          
        for(let i=0; i<s.length; i++){
            if(mapT.get(s[i]) !== mapS.get(s[i]) ){
                return false;
            }
        }

        return true;

        

    }
}
