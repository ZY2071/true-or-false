# true-or-false
验证传递过来的值，返回true 或者 false
# Usage 
```shell
npm i true-or-false
```
然后：
```javascript
import test from "true-or-false"

test({})          //fasle
test([])          //fasle
test(null)        //fasle
test(undefined)   //fasle
test('')          //fasle
test(0)           //fasle
test(false)       //fasle

test({a:1})       //true
test([1])         //true
test('1')         //true
test(1)           //true
test(true)        //true
```
