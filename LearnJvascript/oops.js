//encapsulation
// class student{

//     studentdetails(name,place,course){
//         this.studentname=name
//         this.studentplace=place
//         this.studentcourse=course
//     }
//     displaystudentdetails(){
//         console.log(this.studentname,this.studentplace,this.studentcourse)
//     }
// }
// const stu1=new student()
// stu1.studentdetails("navya","bangalor","playwright")
// stu1.displaystudentdetails()
//Inheritence
//single inheritence
// class A{
//     m1(){
//         console.log("this method is simple one M1")
//     }
//      m2(){
//         console.log("this method is simple one M2")
//     }
//      m3(){
//         console.log("this method is simple one M3")
//     }
//      m4(){
//         console.log("this method is simple one M4")
//     }
// }
//     class B extends A{
//     m5(){
//         console.log("this method is simple one M5")
//     }
//      m6(){
//         console.log("this method is simple one M6")
//     }
//      m7(){
//         console.log("this method is simple one M7")
//     }
//      m8(){
//         console.log("this method is simple one M8")
//     }

// }
//multi level inheritence
//     class C extends B{
//     m9(){
//         console.log("this method is simple one M9")
//     }
//      m10(){
//         console.log("this method is simple one M10")
//     }
//      m11(){
//         console.log("this method is simple one M11")
//     }
//      m12(){class
//         console.log("this method is simple one M12")
//     }

// }
// const objb=new C()
// objb.m5() //from B
// objb.m1()  //from A
// objb.m10() //from C
//hirarichal
// class A{
//     m1(){
//         console.log("this method is simple one M1")
//     }

// }
// class B extends A{
//     m2(){
//         console.log("this method is simple one M2")
//     }

// }
// class C extends A{
//     m3(){
//         console.log("this method is simple one M3")
//     }

// }
// const obj=new B()
// obj.m1() //this is from A
// obj.m2()  //this is from B

// const obj2=new C()
// obj2.m1()
// obj2.m3() //this is from C


//polymorphism
//method overriding -same name,same parameters
// class A{
//     display(){
//         console.log("this method is from parent")
//     }
//     add(num1,num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1+num2)

//     }
// }
// class B extends A{
//     display(){
//         console.log("this method is from child")
//     }
//     add(num1,num2,num3){
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num1+num2+num3)

//     }
// }
// const obj=new B //const obj=new A
// obj.display() //method overriding
// obj.add(2,3,2)//method overloading
//prototype
// class employee{
//     x=20
//     m1(){
//         console.log("simple M1 method")
//     }
//      m2(){
//         console.log("simple M2 method")
//     }
// }
// employee.prototype.y=50
// employee.prototype.m3=function (){
//     console.log("simple M3 method")
// }
// const emp1=new employee()
// emp1.m1()
// emp1.m2()
// emp1.m3()
// console.log( emp1.x)
// console.log( emp1.y)
//debug
// function add(n1,n2,n3){
//     console.log(n1)
//      console.log(n2)
//       console.log(n3)
//        console.log(n1+n2+n3)
// }
// add(2,3,4)
// class employee{
//     x=20
//     m1(){
//         console.log("simple m1 method")
//     }
//     m2(){
//         console.log("simple m2 method")
//     }
// }
// employee.prototype.y=20
// employee.prototype.m3=function (){
//     console.log("simple m3 method")
// }
// const emp=new employee()
// emp.m1()
// emp.m3()
// console.log(emp.x)
// console.log(emp.y)