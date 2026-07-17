class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(ops) {
            const record = [];
    
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
            const score1 = record[record.length - 1];
            const score2 = record[record.length - 2];
            record.push(score1 + score2);
        } else if (ops[i] === "D") {
            const lastScore = record[record.length - 1];
            record.push(lastScore * 2);
        } else if (ops[i] === "C") {
            record.pop();
        } else {
            record.push(parseInt(ops[i]));
        }
    }
    
    return record.reduce((sum, score) => sum + score, 0);
    }
}
