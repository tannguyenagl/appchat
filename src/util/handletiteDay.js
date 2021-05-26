export function handletiteDay(arr){
    var newArr = [];
    var newArr2 = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i].titleDay) === -1) {        
        newArr.push(arr[i].titleDay)
        newArr2.push(arr[i])
    }else{
        let temp =  arr[i]
        temp.titleDay = ""
        newArr2.push(temp)
    }
  }
  return newArr2
}
