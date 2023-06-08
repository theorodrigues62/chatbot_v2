const datalist = document.querySelector("#datalist");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const inputdialog = document.querySelector("#inputdialog");

/*let contentAnswer = document.querySelector("#dialoganswer");
const word = contentAnswer.textContent;
const length = word.length;
let count = 0;
contentAnswer.textContent = "";

const write = setInterval(() => {
    contentAnswer.textContent += word[count]
    count += 1;
    if(count > length -1){
        clearInterval(write)
    }
    console.log(count);
}, 100);
*/
console.log("coucou from apijs")
fetch("https://chatbotstjoback.onrender.com/api/v1/dialogs")
.then(response=>response.json())
.then(data=>{
    data.data.forEach(dialog => {
        datalist.innerHTML += `<option value="${dialog.question}">`
    })

    inputdialog.addEventListener("change", e=>{
        question.innerHTML=document.querySelector(".form-question").value
        data.data.forEach(dialog =>{
            if(e.target.value === dialog.question){
                console.log(dialog.answer)
                answer.innerHTML = dialog.answer
            }
        })
    })
})
.catch(error=>console.log(error))

const dialogs=[
    {question:"toto",answer:"tata"}, 
    {question:"Salut", answer:"Salut"}, 
    {question:"ça va ?", answer:"bien et toi ?"}
]

/*inputdialog.addEventListener("change", function(event){
    event.preventDefault();
    question.innerHTML=document.querySelector(".form-question").value
    answer.innerHTML="Coucou"
    dialogs.forEach(element =>{
        if(element.question === document.querySelector(".form-question").value){
            answer.innerHTML=element.answer
        }
    })
})

dialogs.forEach((dialog) =>{
    datalist.innerHTML += `<option value="${dialog.question}">`;
});*/