/**
 * Stack Data Strunct
 *
 * @date    2015-03-19
 * @author  samhou1988@gmail.com
 */
function Stack() {
    // this.length = 0;
    this.data = [];
    this.top = 0;
}

Stack.prototype = {
    push: function (val) {
        this.data[this.top++] = val;
    },

    pop: function () {
        return this.data[--this.top];
    },

    peek: function () {
        if (this.top) {
            return this.data[this.top - 1];
        }
    },

    clear: function () {
        this.top = 0;
    },

    length: function () {
        return this.top;
    }
}

// demo
// palindrome function
function isPalindrome(string) {
    var stack = new Stack();
    for (var i=0, len=string.length; i<len; i++) {
        stack.push(string[i]);
    }

    var rString = '';
    while (stack.length()) {
        rString += stack.pop();
    }

    if (string === rString) {
        return true;
    }

    return false;
}

// true
console.log(isPalindrome('aaraa'));

// false
console.log(isPalindrome('aarba'));

// recursion function
// function fact(i) {
//     if (i <= 1) {
//         return i;
//     } else {
//         return i * fact(i-1);
//     }
// }

function fact(num) {
    var stack = new Stack();

    for (var i = 1; i <= num; i++) {
        stack.push(i);
    }

    var mutil = 1;
    while (stack.length()) {
        mutil *= stack.pop();
    }

    return mutil;
}

// 120
console.log(fact(5));
