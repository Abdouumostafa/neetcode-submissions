class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const closeToOpen = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }
        for (let i of s){
            if(closeToOpen[i]){
                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[i] ){
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(i)
            }
        }
        return stack.length === 0 ? true : false
    }
}
