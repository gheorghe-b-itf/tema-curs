
let matrix = function () {
    let n = m = prompt('Please enter a number `n` for the size of matrix:')
    let x = prompt('Please enter a number `x`, less then `n`, to create the equal line:')
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    arr[i][j] = 0
                } else {
                    arr[i][j] = 1
                }
            } else {
                if (j % 2 === 0) {
                    arr[i][j] = 1
                } else {
                    arr[i][j] = 0
                }
            }
            if (i === x - 1) {
                arr[i][j] = '='
            }
        }
        m--;
    }
    console.log(arr)
}