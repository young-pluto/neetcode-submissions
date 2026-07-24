class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = ""
        for(const str of strs){
            const x = str.length
            encoded = encoded + x + "#" + str
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
      
      const output: string[] = []
      let i:number = 0
      
    while(i < str.length){
        let delimiterIndex = i
        while(str[delimiterIndex] !== '#'){
            delimiterIndex++
        }
        const length = Number(str.substring(i, delimiterIndex))
        const startOfString = delimiterIndex + 1
        const word = str.substring(startOfString,startOfString + length)
        output.push(word)
        i = startOfString + length
    }
        return output
    }
}
