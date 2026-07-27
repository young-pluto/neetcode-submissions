class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = ""

        for(const str of strs){
            encoded = encoded + str.length + "#" + str
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
    let output: string[] = []
    for (let i = 0; i < str.length; i++) {

        let delimiter = ''
        while (str[i] !== '#') {
            delimiter = delimiter + str[i]
            i++
        }
        const length = Number(delimiter)
        const word = str.substring(i + 1, i + length + 1)
        output.push(word)
        console.log(word)
        i = i + length



    }
    return output
    }
}
