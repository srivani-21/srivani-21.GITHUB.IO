const users=[]
function displaymsg(){

    //  let name=document.getElementById("104").value 
    let email=document.getElementById("105").value 
    let password=document.getElementById("107").value 
    let found=users.find((e)=>e.email===email&&e.password===password)
    if(found){
        labmsg.innerHTML="welcome";
    }else{
        labmsg.innerHTML="accessdenied";
    }



    // alert("hello")

    // const user={
    //     name:"srivani",
    //     email:"sri@gmail.com",
    //     password:"1234"
    // };
    // console.log(user);
    //     console.log(user.name);
       
    // const arr=["maths","science"];
    // console.log(arr);
    // console.log(arr[0]);
    // arr.push("english");
    // console.log(arr);

    // console.log("hello");
    // a=10
    // b=10
    // c=a+b
    // alert(c)
    // alert(document.getElementById("102").value)
    // labmsg.innerHTML=document.getElementById("102").value
    //  labmsg2.innerHTML=document.getElementById("103").value
//     let email=document.getElementById("102").value
//     let password=document.getElementById("103").value
//     if(email==="john@gmail.com"&&password==="1234"){
//         labmsg.innerHTML="welcome";}
// else{
//     labmsg.innerHTML="accessdenied";}
// labmsg.innerHTML=document.getElementById("104").Value
// labmsg2.innerHTML=document.getElementById("105").Value



}

function adduser(){
    let name=document.getElementById("104").value 
    let email=document.getElementById("105").value 
    let password=document.getElementById("107").value 
    let user={name:name,email:email,password:password};
    users.push(user);
    showloginform();
    console.log(users);
}
    function showloginform(){
        let str=`
        <h3>Login form</h3>
        <p><label id="labmsg"></label></p>
         <p><label id="labmsg2"></label></p>
       <p><input type="text" id="102" placeholder="email address"></p>
       <p><input type="password" id="103" placeholder="password"></p>
       <p><button class="button" onclick="displaymsg()">log in</button></p>
       <br>
       <p><button class="account" onclick="registerform()"> Create account</button></p>
       `
       root.innerHTML=str
       }
       function registerform(){
        let str=`
        <h3>registration form</h3>
        <p><label>Name:</label><input type="text" id="104" placeholder="Entername"></input></p>
         <p><label>email:</label><input type="email" id="105" placeholder="Enteremail"></input></p>
          <p><label>password:</label><input type="password" id="107" placeholder="Enterpassword"></input></p>
         <p><button type="button" id="106" onclick="adduser()">submit</button></p>
         <p><a href="#" onclick="showloginform()">login here</a></p>
         `
        root.innerHTML=str
       }
    
