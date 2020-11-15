const tombol=document.querySelector(".tombol");
const idk=document.querySelector(".idk");



tombol.addEventListener("click", function(e){
    
    if(e.target.parentElement.className=="tombol"){
        if(e.target.className=="number"){
            let angk=e.target.innerText;      
           display(angk);
        }else if(e.target.className=="operator"){
            let op=e.target.innerText;
            display(op,e.target.className);
            // idk.innerText=op;
        }else if(e.target.className=="reset"){
            location.reload();   
        }else if(e.target.className=="sum"){
            jumlah();
        }

    }

});


// let array=[
  
// ];


function display(data, type=""){ 
   if(type == "operator"){
    if(idk.innerText){
        idk.innerText +=` ${data} `;
    }else{
        idk.innerText =" ";
    }
   }else{
       if(idk.innerText==""){
        num= idk.innerText=data;    
       }else if(idk.innerText.endsWith("+") || idk.innerText.endsWith("-") || idk.innerText.endsWith("/") || idk.innerText.endsWith("*")){
        num= idk.innerText += ` ${data}`;
       }else{
        num= idk.innerText += `${data}`;
       }
       let ar=num;
       console.log(ar);
    }
}

function jumlah(){
    sum=idk.innerText.split(" ");
    
    const oper=sum.filter((ef)=> ef =="+" || ef=="-" || ef=="*" || ef=="/");
    if(oper=="+"){
        const ade= sum.filter((eg)=> eg >0)
        .map((x)=> x*=1)
        .reduce((acum,crntvl)=>
        acum + crntvl);
        console.log(ade);
        
    }else if(oper=="-"){
        const ade= sum.filter((eg)=> eg >0)
        .map((x)=> x*=1)
        .reduce((acum,crntvl)=>
        acum - crntvl);
        console.log(ade);
        
    }else if(oper=="*"){
        const ade= sum.filter((eg)=> eg >0)
        .map((x)=> x*=1)
        .reduce((acum,crntvl)=>
        acum * crntvl);
        console.log(ade);
        
    }else if(oper=="/"){
        const ade= sum.filter((eg)=> eg >0)
        .map((x)=> x*=1)
        .reduce((acum,crntvl)=>
        acum / crntvl);
        console.log(ade);
        
    }

}


// function push(){
//     dataAngka={
//         type:"number",
//         nilai:idk.innerText,
//     }
//     // array.push(dataAngka);

//     // dataOperator={
//     //     type:"operator",
//     //     nilai:op
//     // }
//     // array.push(dataOperator);
// }





