function textmovie(age: number ,  tax: number , disc: boolean){
    tax = 0
    if(age < 12){
        const Pay = tax + (60 /0.1);
        console.log("คุณอายุต่ำกว่า12ปี: ",true);
    }else(age >= 12);{
        const Pay = tax + (120 / 0.1);
        console.log("คุณมีอายุระหว่าง12-59ปี: ",true)
    }{
        const Pay = tax + (100 / 0.1);
        console.log("คุณอายุ60ปีขึ้นไป: ",true);
    }
}
console.log(`${textmovie}`);


//let Tax: number = 200;
//let age: number = 12;
    //if(age < 12 ){
        //const Pay = Tax + (60 /0.1);
       // console.log("คุณอายุต่ำกว่า12ปี: ",true);
   // }else(age >= 12);{
   //     const Pay = Tax + (120 / 0.1);
   //     console.log("คุณมีอายุระหว่าง12-59ปี: ",true)
  //  }{
  //      const Pay = Tax + (100 / 0.1);
//console.log("คุณอายุ60ปีขึ้นไป: ",true);
  //
//}
//console.log(`${age} , ${Tax}`)