const subject=document.getElementById("subject");
const topic=document.getElementById("topic");
const imppoints=document.getElementById("imppoints");
const form=document.querySelector("form");
const stickycontainer=document.getElementById("stickycontainer");



// now ek array create krlenege that help in storing the all input



const tasks= localStorage.getItem("tasks")?
JSON.parse(localStorage.getItem("tasks")): [];

showalltsk();


// -----------------------------------now hame loop chalani h all task mein ---------------------------------
function showalltsk(){
    tasks.forEach((value,index)=>{
    //  here we create all our equired element 
    const div=document.createElement("div");
    div.setAttribute("class","sticky");

    const subpara=document.createElement("p");
    subpara.setAttribute("id","subpara");
    subpara.innerText=value.subject;
    div.append(subpara);

    const topicpara=document.createElement("p");
    topicpara.setAttribute("id","topicpara");
     topicpara.innerText=value.topic;
    div.append(topicpara);

    const notepara=document.createElement("p");
    notepara.setAttribute("id","notepara");
    notepara.innerText=value.imppoints;

    div.append(notepara);
 stickycontainer.append(div);



    })
}
 function removetask(){
    tasks.forEach(()=>{
        const div=document.querySelector(".sticky");
        div.remove();
    })
 }

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("ayush");
    removetask();
    tasks.push({
       subject:subject.value,
       topic:topic.value,
       imppoints:imppoints.value
    });
    // console.log(tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showalltsk();
})