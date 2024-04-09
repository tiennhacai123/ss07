interface Books{
    title:string,
    author:string,
    price:number,
};
let book:Books[]=[
    {
    title:'how to fight',
    author:'abcd',
    price:1900000,
    },
]
function printBook(book:Books[]):void{
    book.forEach((item,index,arr)=>{
        console.log(item);        
    }        
    );   
}
printBook(book)
function updateBook(book:Books[],title:string,author:string,price:number):void{
    book.forEach((item)=>{
        if(item.title==title){
            item.author=author
            item.price=price
        }
    })
    printBook(book);
}
updateBook(book,"how to fight","Lookism",10);
