const {hash} = window.location;
let message = atob(hash.replace('#',""));
if(message){
    document.querySelector("#decode_value").innerHTML = message;
}
const secret_message = document.querySelector("#secret_message");
document.querySelector('form').addEventListener('submit',function (e) { 
    const encrepted_value = document.querySelector("#encrepted_value");
    e.preventDefault();
    
    encrepted_value.value = `${window.location}#${btoa(secret_message.value)}`;
    encrepted_value.select();

 })