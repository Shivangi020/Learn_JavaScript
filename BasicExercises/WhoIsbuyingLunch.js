var nameList =["Junho","Jinyoung","Myungsoo","Do hyun","Hyung sik","G dragon"]

function lunchBuyer(){
    var num = Math.random();
    var nameIndex = Math.floor(5*num);
    console.log(nameList[nameIndex] + " is buying lunch today.")
}

