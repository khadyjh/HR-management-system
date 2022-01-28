'use strict;'

// Employee.prototype.calculate=function(){
//     let level1=this.level;
//     let salaryR;
//     let netSalary;
//     switch(level1){
//         case "Senior":
//             salaryR=Math.floor(Math.random() * 2000) + 1500;

//             break;
//         case "Mid-Senior":
//             salaryR=Math.floor(Math.random() * 1500) + 1000;

//             break;
//         case "Junior":
//             salaryR=Math.floor(Math.random() * 1000) + 500;

//             break;

//     }
//     netSalary= salaryR -(salaryR*7.2);
//     return netSalary;
// }




// function Employee(empId,fullName,department,level,imgUrl,salary){
//     this.empId=empId;
//     this.fullName=fullName;
//     this.department=department;
//     this.level=level;
//     this.imgUrl=imgUrl;
//     this.salary=salary;
// }

// Employee.prototype.render=function(){
//    document.write(`<p>${this.fullName}  ${this.salary}</p>`)
// }

// const Emp1=new Employee(1000,"Ghazi Samer","Administration", "Senior",null,)
// this.salary=Emp1.calculate();
// Emp1.render();

// const Emp2=new Employee(1001,"Lana Ali","Finance", "Senior",null)
// Emp2.render();
// const Emp3=new Employee(1003,"Safi Walid","Administration", "Mid-Senior",null)
// Emp3.render();









function Employee(empId, fullName, department, level,salary) {
    this.empId = empId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgUrl = './img/GhaziSamer';
    this.salary = salary;
}

Employee.prototype.calculate = function () {
    let salaryR;
    let netSalary;
    switch (this.level) {
        case "Senior":
            salaryR = Math.floor(Math.random() * (2000 - 1500)) + 1500;
            
            break;
        case "Mid-Senior":
            salaryR = Math.floor(Math.random() * (1500 - 1000)) + 1000;

            break;
        case "Junior":
            salaryR = Math.floor(Math.random() * (1000 - 500)) + 500;;

            break;

    }

    netSalary =   salaryR - (salaryR * (7.5/100));
    
    return Math.floor(netSalary) ;
}

Employee.prototype.render=function(){
    document.write(`<p>${this.fullName} and the salary is  ${this.calculate()}</p>`);
}

const Emp1=new Employee(1000,"Ghazi Samer","Administration", "Senior");
Emp1.render();
const Emp2=new Employee(1001,"Lana Ali","Finance", "Senior",);
Emp2.render();
const Emp3=new Employee(1003,"Safi Walid","Administration", "Mid-Senior");
Emp3.render();

const Emp4=new Employee(1002,"Tamara Ayoub","	Marketing", "Senior");
Emp4.render();

const Emp5=new Employee(1004,"Omar Zaid","Development", "Senior");
Emp5.render();

const Emp6=new Employee(1005,"Rana Saleh","	Development", "Junior");
Emp6.render();

const Emp7=new Employee(1006,"	Hadi Ahmad","	Finance", "Mid-Senior");
Emp7.render();

