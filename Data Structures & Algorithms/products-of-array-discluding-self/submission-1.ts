class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product: number = 1
        let x = 0;
        let output:number[] = []
        for(const num of nums){
            if(num !==0){
            product = product*num
            }
            else{
                x++
            }
        }

        for(const num of nums){
           if(x==1){
            if(num !==0){
            output.push(0)}
            else{
                output.push(product)
            }
           }
           else if(x>1){
            output.push(0)
           }
           else{
            output.push(product/num)
           }

        }
       return output
    }
}
