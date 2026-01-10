function displaymsg(){
    // alert("hello")
    // a=10
    // b=10
    // c=a+b
    // alert(c)
    // alert(document.getElementById("102").value)
    // labmsg.innerHTML=document.getElementById("102").value
    //  labmsg2.innerHTML=document.getElementById("103").value
    let email=document.getElementById("102").value
    let password=document.getElementById("103").value
    if(email==="john@gmail.com"&&password==="1234"){
        labmsg.innerHTML="welcome";}
else{
    labmsg.innerHTML="accessdenied";}}
    function showloginform(){
        let str=`
        <h3>Login form</h3>
        <p><label id="labmsg"></label></p>
         <p><label id="labmsg2"></label></p>
       <p><input type="text" id="102"></p>
       <p><input type="password" id="103"></p>
       <p><button class="button" onclick="displaymsg()">log in</button></p>
       <br>
       <p><button class="account" onclick="registerform()"> Create account</button></p>
       `
       root.innerHTML=str
       }
       function registerform(){
        let str=`
        <h3>registration form</h3>`
        root.innerHTML=str
       }
    
