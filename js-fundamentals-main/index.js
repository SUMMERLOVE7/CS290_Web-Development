console.log("Hello world!")
console.log("========================")
console.log("=======Variables")
console.log("========================")

var i = 4  /*변수 생성할땐 var 사용. not int, float*/
console.log("==", i, "typeof(i):", typeof(i))

i = "string";
console.log("==", i, "typeof(i):", typeof(i))

i = 3.1415
console.log("==", i, "typeof(i):", typeof(i))

console.log("============================")
console.log("====Numbers")
console.log("============================")

var n = 9
var m = 5

console.log("==n / m:", n/m)

console.log("==2==2: ", 2==2)
console.log("==2 ==3: ", 2==3)
console.log("==2==2: ", 2 == '2')
console.log("==2===2: ", 2 === '2')
console.log("==2!==2: ", 2 !== '2')

console.log("=======================")
console.log("== Strings")
console.log("=======================")

var str1 = "This is a \"string\""
var str2 = 'This is also a "string"'
var concatenation = str1 + str2

console.log("==concatenation:", concatenation)
console.log("==str11 + 16:", str1 + 16)
console.log("==16 + str11:", 16 + str1 )

str1[3] = "x"
console.log("== str1[3]:", str1[3])
console.log("== str1.replace('s','x'):", str1.replace('s', 'x') )
console.log("== 'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'))

console.log("===========================")
console.log("Function----------")
console.log("===========================")

function addStuff(a, b, c){
    console.log("==In addStuff, arguments", arguments);
    //if(arguments.length !== 3){

    //}
    if(!c){
        console.log("c is falsy")
    }
    return a + b + c
}

console.log("==addStuff(1, 2, 3):", addStuff(1, 2, 3))
console.log("==addStuff('1', '2', 3):", addStuff('1', '2', 3))
console.log("==addStuff('1', '2', '3'):", addStuff('1', '2', '3'))
console.log("==addStuff(1, 2, '3'):", addStuff(1, 2, '3'))
console.log("==addStuff(1, 2):", addStuff(1, 2))  /*변수 하나가 없으면 에러 아님. c가 없으므로 undefined라고 함.존재하지 않는다는 뜻 */
console.log("==addStuff(1, 2, 3, 4):", addStuff(1, 2, 3, 4)) /*변수 많으면 딱 해당하는 갯수까지만 계산*/

console.log("==typeof(addStuff):", typeof(addStuff))

var foo = addStuff;
console.log("==foo(1, 2, 3):", foo(1, 2, 3))

var too = addStuff(1, 2, 3);
console.log("==too:", too)

var bar = function () {  /*함수 이름 지정 안한 함수 : anonymous function */
    console.log("Inside our anonymous function")
}

bar()

console.log("===========================")
console.log("Arrays---------")
console.log("===========================")

var array = [1, '2', foo, ['a', 'b', 'c']]
console.log("--array:", array)
console.log("==array.length:", array.length)

for(var i = 0; i < array.length; i++){
    console.log('--array['+i+']:', array[i])

}

array.forEach(function (){
    console.log("----Inside forEach")
})

array.forEach(function (elem){
    console.log("----Inside forEach(), elem", elem)
})

function printArrayElement(elem){
    console.log("----Inside forEach(), elem", elem)
}

array.forEach(printArrayElement)

array.forEach(function (elem, idx){
    console.log("----Inside forEach(), elem", elem, "idx", idx)
})

//array.forEach()

console.log("===========================")
console.log("Object---------")
console.log("===========================")

var obj = {}
console.log("== obj:", obj)

// KEY      VALUE
//pet --> description
//'cat' --> 'cute'
//'dog' --> 'loyal'
//'fish' --> 'boring'
// Mapping['cat']

var mapping = {
    'cat' : 'cute',
    'dog' : 'loyal',
    'fish' : 'boring'
}

console.log("==mapping: ", mapping)
console.log("==mapping['cat']:", mapping['cat'])

var student= {
    'name' : 'Mia',
    firstname : 'Mia',
    lastname : 'Lee',
    'gpa' : 3.75,
    'email' : 'hellomia@oregonstate.edu',
    getfullName: function (){
        return this.firstname +" " + this.lastname
    }

}

console.log("==student: ", student)
console.log("==student['name']: ", student['name'])
console.log("==student.name: ", student.name)

/*
function NameOfClass (){          value prototype   ---->
    thisvalue;                    value prototype   ----> getvalue function(){}
                                  value prototype   ---->
}
*/

console.log("-------------------")
console.log("----Classes")
console.log("-------------------")

function Student(firstName, lastName, gpa){
    this.firstname = firstName
    this.lastname = lastName
    this.gpa = gpa
}

Student.prototype.getfullName = function (){
    return this.firstname + "" + this.lastname
}

var s = new Student("Leia", "Orfana", 4.0)
console.log("----s", s)
console.log("----s.getfullName()", s.getfullName())

