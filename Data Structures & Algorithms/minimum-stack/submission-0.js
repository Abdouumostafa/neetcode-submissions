class MinStack {
    constructor() {
        this.stack = []
        this.minimumStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        const minimumNumber = Math.min(val,
         this.minimumStack.length === 0 ?
          val 
          :
           this.minimumStack[this.minimumStack.length - 1])
        this.minimumStack.push(minimumNumber)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minimumStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimumStack[this.minimumStack.length - 1]
    }
}
