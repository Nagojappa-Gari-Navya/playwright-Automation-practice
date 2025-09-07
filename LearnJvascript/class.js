// class calculator{
//      stuname="swarna"
//      constructor(value1,value2){
//         console.log(value1)
//         console.log(value2)
//      }
//     add(num1,num2){

//         console.log(num1+num2)
//     }
//      sub(num1,num2){
//         console.log(num1-num2)
//     }
//      mul(num1,num2){
//         console.log(num1*num2)
//     }
//      div(num1,num2){
//         console.log(num1/num2)
//     }
// }
// const cal1=new calculator("niha","kaathya")
// cal1.add(3,7)
// cal1.sub(7,9)
// cal1.mul(7,3)
// cal1.div(3,9)
// console.log(cal1.stuname)
// cal1.displayname()
// const cal2=new calculator()
// cal2.add(8,3)
// console.log(cal2.stuname)
// cal1.displayname()
// cal1.add(7,0)
// class employee{
//     empname="Madhu"
//     displayempDetails(){
//         console.log(this.empname)
//     }
//     m1(){
//         console.log("this is a m1 method")
//     }
//      m2(){
//         console.log("this is a m2 method")
//         this.m1()
//     }
// }
// const emp1=new employee()
// emp1.displayempDetails()
// emp1.m2()
class student {
    static stuname="navya"
    stuplace="blr"
    m1() {
        console.log("this is a m1 method")
    }
    static m2() {
        console.log("this is a m2 method")
        
    }
    m3() {
        console.log("this is a m3 method")
    
    }
    static m4() {
        console.log("this is a m4 method")
        
    }


}
//const stu=new student()
console.log(student.stuname)
student.m2()
