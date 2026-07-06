class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length){
            return false
        }
        const map= new Map<string,number>();
        const map2= new Map<string,number>();


        for(let i=0; i<s.length; i++){
           if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
           }
           else
           map.set(s[i],1)
        }

        for(let i=0; i<t.length; i++){
           if(map2.has(t[i])){
            map2.set(t[i],map2.get(t[i])+1)
           }
           else
           map2.set(t[i],1)           
        }
        
        for(let i=0; i<s.length; i++){
            if(map.get(s[i]) !== map2.get(s[i])){
                return false
            }
        }

        return true

    }
}
