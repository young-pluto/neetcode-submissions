class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const output : string[][] = []
        const map = new Map<string,string[]>

        for( const str of strs){
            const temp = str.split("")
            temp.sort()
            const s = temp.join("")

            if(map.has(s)){
                const x = map.get(s)
                x.push(str)
                map.set(s,x)
               
            }
            else{
               map.set(s,[str]) 
            }
        }
        for(const val of map.values()){
            output.push(val)
        }
        return output
    }
}
