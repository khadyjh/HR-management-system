'use strict ;'

let acountS = document.getElementById('accountSection');

let empArray = gitDataFromL();




function gitDataFromL() {
    let arr1 = localStorage.getItem('employee');
    let arr2 = JSON.parse(arr1);
    // console.log(arr2);
    return arr2;

}


function rend1(arr,arr2,arr3) {
    let allNum=0; let allS=0;let allAvg;
    // for(let i=0 ;i< arr.length ;i++){
    // }
    allNum=allNum+arr[0]+arr2[0]+arr3[0];
    allS=allS+arr[1]+arr2[1]+arr3[1];
    allAvg=allS/allNum;
    
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    acountS.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_2 = document.createElement('th');
    heading_2.textContent = "Numbers of employees";
    let heading_3 = document.createElement('th');
    heading_3.textContent = "Average salary";
    let heading_4 = document.createElement('th');
    heading_4.textContent = "Total salary";

    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = allNum;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent =  allS;
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.textContent = Math.floor(allAvg);

    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    tbody.appendChild(row_2);
}

function num(array) {
    let f,d,m=0;
    let arr;
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].department == 'Finance') {
            arr = array[i];
            f++;
        } else if (array[i].department == 'Development') {
            arr = array[i]
             d++;
        } else if (array[i].department == 'Marketing') {
            arr = array[i];
            m++;

        }
    }
    
}


function renderD(arr1){
    let num=0; let avgS;let salaryS=0;
    for (let i=0 ;i<arr1.length ; i++){
        if(arr1[i].department== 'Development')
        {
            num++;
            salaryS=salaryS+arr1[i].salary;
        }
        
    }
     avgS=salaryS/num;
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
  
    table.appendChild(thead);
    table.appendChild(tbody);
    acountS.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.textContent = "Department";
    let heading_2 = document.createElement('th');
    heading_2.textContent = "Numbers of employees";
    let heading_3 = document.createElement('th');
    heading_3.textContent = "Average salary";
    let heading_4 = document.createElement('th');
    heading_4.textContent = "Total salary";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = "Development.";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = num;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent =Math.floor(avgS);
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.textContent = salaryS;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    tbody.appendChild(row_2);
    let dataA=[num,salaryS];
    return dataA;

}

function renderF(arr1){
    let num=0; let avgS;let salaryS=0;
    for (let i=0 ;i<arr1.length ; i++){
        if(arr1[i].department== 'Finance')
        {
            num++;
            salaryS=salaryS+arr1[i].salary;
        }
        
    }
     avgS=salaryS/num;
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
  
    table.appendChild(thead);
    table.appendChild(tbody);
    acountS.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.textContent = "Department";
    let heading_2 = document.createElement('th');
    heading_2.textContent = "Numbers of employees";
    let heading_3 = document.createElement('th');
    heading_3.textContent = "Average salary";
    let heading_4 = document.createElement('th');
    heading_4.textContent = "Total salary";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = "Finance.";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = num;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent =Math.floor(avgS);
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.textContent = salaryS;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    tbody.appendChild(row_2);
    let dataA=[num,salaryS];
    return dataA;

}

function renderM(arr1){
    let num=0; let avgS;let salaryS=0;
    for (let i=0 ;i<arr1.length ; i++){
        if(arr1[i].department== 'Marketing')
        {
            num++;
            salaryS=salaryS+arr1[i].salary;
        }
        
    }
     avgS=salaryS/num;
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
  
    table.appendChild(thead);
    table.appendChild(tbody);
    acountS.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.textContent = "Department";
    let heading_2 = document.createElement('th');
    heading_2.textContent = "Numbers of employees";
    let heading_3 = document.createElement('th');
    heading_3.textContent = "Average salary";
    let heading_4 = document.createElement('th');
    heading_4.textContent = "Total salary";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.textContent = "Marketing.";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.textContent = num;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.textContent =Math.floor(avgS);
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.textContent = salaryS;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    tbody.appendChild(row_2);
    let dataA=[num,salaryS];
    return dataA;

}
let devA=renderD(empArray);
let finA=renderF(empArray);
let markA=renderM(empArray);
console.log(markA);

rend1(markA,finA,devA);