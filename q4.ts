type Finess = [name:string , age:number , boolean];
const userFiness: Finess[] = [];
userFiness.push(["อนันต์",25,true]);
userFiness.push(["เจนจิรา",35,true]);
userFiness.push(["ชาคริต",42,true]);
userFiness.push(["รุ่งโรจน์",49,true]);
userFiness.push(["สามารถ",27,true]);
for(const [name , age , boolean] of userFiness){
    console.log(`ชื่อ: ${name} | อายุ: ${age} | ${boolean}: จ่ายเงินแล้ว`)
}
console.log(userFiness)
