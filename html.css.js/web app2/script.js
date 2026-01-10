const products=[
    {name:"product",
        desc:"this product available",
        price:50,
        imageurl:"https://miro.medium.com/v2/resize:fit:1000/1*TYMKEhU1JSCRBClgjXbplw.jpeg"
    },
    {name:"product1",
        desc:"this product available",
        price:30,
        imageurl:"https://miro.medium.com/v2/resize:fit:1000/1*TYMKEhU1JSCRBClgjXbplw.jpeg"
    },
    {name:"product2",
        desc:"this product available",
        price:60,
        imageurl:"https://miro.medium.com/v2/resize:fit:1000/1*TYMKEhU1JSCRBClgjXbplw.jpeg"
    }
];
function showproducts(){
    let str=`<div class="row">`;
products.map(e=>{
    str=str+
    `
    <div class="box">
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
 
   <img src= ${e.imageurl}/>
     <h3> ${e.price}</h3>
   <button class="button">Add to cart</button>
   </div>
   `
})
    str=str+`</div>`;
    root.innerHTML=str;
    }