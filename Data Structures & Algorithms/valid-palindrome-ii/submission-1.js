class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        let left = 0; 
        let right = s.length-1;

        while(left<right){

            while(left<right && !this.isAlphaNumeric(s[left])){
                left++;
            }
            while(left<right && !this.isAlphaNumeric(s[right])){
                right--;
            }

         if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                // Try removing left character OR right character
                return this.isPalindromeRange(s, left + 1, right) || 
                       this.isPalindromeRange(s, left, right - 1);
            }
            
            left++;
            right--;

        }
            return true; 
        }

         isPalindromeRange(s, left, right) {
        while (left < right) {
            // Skip non-alphanumeric from left
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }
            // Skip non-alphanumeric from right
            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }
            
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }



    isAlphaNumeric(char){
        return (char >='a' && char <='z') ||
               (char >='A' && char <='Z') ||
               (char >='0' && char <='9')
    }
}
