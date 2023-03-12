
function myEach(array, alert){
    let result = Array.isArray(array)
    if(result){
        array.forEach((item) => alert(item))
    }
    else{
        let newArray = Object.values(array)
        newArray.forEach((item) => alert(item))
    }
return array
}

function myMap(array, multiply){
let result = Array.isArray(array)
if(result){
    let newArray = array.map((num) => num *3)
    return newArray
} else{
    let objArray = Object.values(array)
    let newobjArray = objArray.map((num) => num *3)
    return newobjArray
}
}

function myReduce(collection, acc){
    let result = Array.isArray(collection)
    if(result){
        collection.reduce((acc, val) => acc + (val*3))
    }else{
        let objArray = Object.values(collection)
        console.log("hi!" , objArray)
        let newObjArray = objArray.reduce((acc, val) => acc + (val*3))
        console.log("hiiiii", newObjArray)
          return newObjArray
    }
}

// function myFind(collection, predicate){
//     let result = Array.isArray(collection)
//     if(result){
//         collection.find((element) => (element) === predicate)
    
//     } else if (!result){
//         let objArray = Object.values(collection)
//         let newObjArray = objArray.find((element) => (element) === predicate)
    
//     } else {

//     }
//     return 
// }


function myFind(collection, rule){
    for(x = 0; i < collection.length; x++){
        if(x === rule){
            return x
        }
}
}

function myFirst(array, [n]){
 for(i = 0; i < array.length; i++) 
    if(i === array[0]){
        return i
    // }else{
    //     [n] === value
    //     return [n]
    // }
}
}