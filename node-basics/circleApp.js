var circle = require('./circle')
var figlet = require('figlet')

console.log("== circle: ", circle)
console.log("== circle.circumference(5): ", circle.circumference(5))
console.log("== circle.area(5): ", circle.area(5))

figlet('Hello, CS 290!', function(err, data){
    if(!err){
        console.log(data)
    }
})

/*
rm package.json package-lock.json
하면 문장이 뜨는데 y y 하고
npm init하면
package.json이 자동생성
 */