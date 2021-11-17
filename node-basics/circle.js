function circumference(r){
    return 2 * r * Math.PI
}

function area(r){
    return Math.PI * r * r
}
//module.exports="This is a circle library"
module.exports = circumference
module.exports = {
    circumference: circumference,
    area: area
}


