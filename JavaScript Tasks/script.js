function generateHexColor(){
    //array of element of range 0-f
    let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    let hexColor = "#";

    for(let i=0;i<6;i++){
        let randomNum=Math.floor(Math.random()*16);
        hexColor += arr[randomNum];
    }
    console.log(hexColor)
    document.body.style.backgroundColor=hexColor;
    

}
generateHexColor();