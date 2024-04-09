interface Student{
    id:number,
    name:string,
    class:string,
}
let student:Student[] = [
    { id: 1, name: "Tien", class: '1' },
    { id: 2, name: "Tien2", class: '2' },
    { id: 3, name: "Tien3", class: '3' },
    { id: 4, name: "Tien4", class: '4' },
    { id: 5, name: "Tien5", class: '4' },
    { id: 6, name: "Tien6", class: '4' },

];
function printArr(studentArr:Student[],classname:string) {
    studentArr.forEach((item, index, arr) => {
        if(classname==item.class)
        console.log(item);
    });
}
printArr(student,'4');