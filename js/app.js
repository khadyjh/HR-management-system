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

let infoForm = document.getElementById("infoForm");
let dataSection = document.getElementById("dataEntared");


function generateIdNumber() {

    let a = Math.floor(100000 + Math.random() * 900000);
    a = String(a);
    a = a.substring(0, 4);
    return a;
}





function Employee(empId, fullName, department, level, imgurl) {
    this.empId = empId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgUrl = imgurl;
    // this.salary = salary;
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
function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    // let dep =event.target.dep.value.slected;
    let dep = document.getElementById('dep').value;
    let level = document.getElementById('level').value;
    let imgUrl = event.target.imgUrl.value;
    let empId = generateIdNumber();
    // console.log( `${name} ${dep} ${level} ${imgUrl}`)
    const newEmp = new Employee(empId, name, dep, level, imgUrl);
    newEmp.render();

}

Employee.prototype.render = function () {
    // document.write(`<p>${this.fullName} and the salary is  ${this.calculate()}</p>`);
    let div = document.createElement('div');
    div.style.backgroundColor = '#FFD5CD'
    div.style.borderRadius = '5px';
    div.style.width = '300px';
    div.style.length = '400px';
    div.style.margin = '5px';
    dataSection.appendChild(div);
    let div1 = document.createElement('div');
    div.appendChild(div1);
    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = this.fullName;
    p.style.display = 'flex';
    p.style.fontFamily = 'fantasy'
    p.style.justifyContent = 'center';
    p.style.alignContent = 'center'
    let p1 = document.createElement('p');
    div.appendChild(p1);
    p1.textContent = this.department;
    p1.style.fontFamily = 'fantasy'

    p1.style.display = 'flex';
    p1.style.justifyContent = 'center';
    p1.style.alignContent = 'center'
    let p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = this.level;
    p2.style.display = 'flex';
    p2.style.fontFamily = 'fantasy'

    p2.style.justifyContent = 'center';
    p2.style.alignContent = 'center'
    let p3 = document.createElement('p');
    p3.textContent = this.empId;
    div.appendChild(p3);
    p3.style.display = 'flex';
    p3.style.fontFamily = 'fantasy'

    p3.style.justifyContent = 'center';
    p3.style.alignContent = 'center'
    let img = document.createElement('img');
    div1.appendChild(img);
    img.setAttribute('src', this.imgUrl);
    img.setAttribute('alt', this.name);
    img.style.width = '200px';
    div1.style.display = 'flex';
    div1.style.justifyContent = 'center';
    div1.style.alignContent = 'center'


}




// const Emp1=new Employee(1000,"Ghazi Samer","Administration", "Senior");
// Emp1.render();
// const Emp2=new Employee(1001,"Lana Ali","Finance", "Senior",);
// Emp2.render();
// const Emp3=new Employee(1002,"Tamara Ayoub","Marketing", "Senior");
// Emp3.render();
// const Emp4=new Employee(1003,"Safi Walid","Administration", "Mid-Senior");
// Emp4.render();
// const Emp5=new Employee(1004,"Omar Zaid	","Development", "Senior");
// Emp5.render();
// const Emp6=new Employee(1005,"Rana Saleh","Development", "Junior");
// Emp6.render();
// const Emp7=new Employee(1006,"SHadi Ahmad","AFinance", "Mid-Senior");
// Emp7.render();




infoForm.addEventListener('submit', handelSubmit);
