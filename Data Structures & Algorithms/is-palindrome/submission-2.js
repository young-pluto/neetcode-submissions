class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
 isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        
        while (left < right) {
            // Skip non-alphanumeric characters from left
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }
            
            // Skip non-alphanumeric characters from right
            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }
            
            // Compare characters (case-insensitive)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
       isAlphaNumeric(char) {
        return /[a-zA-Z0-9]/.test(char);
    }
}
