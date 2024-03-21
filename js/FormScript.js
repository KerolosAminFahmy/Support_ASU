var AllProgress=document.querySelectorAll(".ProgressBar .Container")
const CorrectElement=`<i class="fa-solid fa-check"></i>`;
const FailedElement=``;
var AllField = document.querySelectorAll(".InputTake input")
var time=500;
var userName=false,Email=false,IdField=false,levelField=false,FacultyField=false;
function setSuccessProgress(index,finalCounter=80){
  AllProgress[index].firstElementChild.classList.add("Done")
  MoveProgressbar(index,80)
}
function MoveProgressbar(index,finalCounter=80){
  let counter=parseInt(AllProgress[index].firstElementChild.querySelector(".FillLine").style.minHeight)
  if(isNaN(counter))
  {
    counter=0
  }
  var time =setInterval(()=>{
    AllProgress[index].firstElementChild.querySelector(".FillLine").style.minHeight=`${counter}%`;
    counter+=1
    if(counter>finalCounter){
      clearInterval(time)
    }
  },10)
}
function moveback(index,startCounter,EndCounter){
  if(startCounter>EndCounter){
    var time =setInterval(()=>{
      AllProgress[index].firstElementChild.querySelector(".FillLine").style.minHeight=`${startCounter}%`;
      startCounter-=1
      if(startCounter<EndCounter){
        clearInterval(time)
      }
    },10)
    return;
  }
  var time =setInterval(()=>{
    AllProgress[index].firstElementChild.querySelector(".FillLine").style.minHeight=`${startCounter}%`;
    startCounter+=1
    if(startCounter>EndCounter){
      clearInterval(time)
    }
  },10)
}
function setFailureProgress(index){
  if(AllProgress[index].firstElementChild.classList.contains("Done")){
    AllProgress[index].firstElementChild.classList.remove("Done")
    moveback(index,80,0)
  }

  
}
function setProgresUserName(i,e){
  let counterSpace=countSpacesWithoutFirst(e.value);
  let Startcounter=parseInt(AllProgress[i].firstElementChild.querySelector(".FillLine").style.minHeight)
  if(isNaN(Startcounter))
  {
    Startcounter=0
  }
  
  if(counterSpace<5 && counterSpace>=0)
  moveback(i,Startcounter,counterSpace*20)
}
function setProgresEmail(i,e){
  let counterSpace=countEnailCorrect(e.value);
  let Startcounter=parseInt(AllProgress[i].firstElementChild.querySelector(".FillLine").style.minHeight)
  if(isNaN(Startcounter))
  {
    Startcounter=0
  }
  
  if(counterSpace<5 && counterSpace>=0)
    moveback(i,Startcounter,counterSpace*20)
}
AllField.forEach((e,i)=>{
  e.addEventListener("input",()=>{
    if(AllProgress[i].firstElementChild.querySelector("i")!=null &&AllProgress[i].firstElementChild.querySelector("i").classList.contains("fa-minus")){
        AllProgress[i].firstElementChild.removeChild(AllProgress[i].firstElementChild.querySelector("i"));
        AllProgress[i].firstElementChild.innerHTML+=CorrectElement;
      }
    if(i==0){
      setProgresUserName(i,e);
      
    }else if(i==1){
      
      setProgresEmail(i,e);
    }
  })

  e.addEventListener("focusout",()=>{
    if(i==0){
      if(validateFullName(e.value)){
        setSuccessProgress(i)
        e.style.borderColor="white";
        userName=true;
      }else{
        AllProgress[i].firstElementChild.classList.remove("Done")
        setProgresUserName(i,e)
        e.style.borderColor="red";
        userName=false;
      }
    }else if(i==1){
      if(isValidEmail(e.value)){
        setSuccessProgress(i)
        e.style.borderColor="white";
        Email=true
      }else{
        setProgresEmail(i,e);
        AllProgress[i].firstElementChild.classList.remove("Done")

        e.style.borderColor="red";
        Email=false
      }
    }else if(i==2){
      if(IsValidID(e.value)){
        setSuccessProgress(i)
        e.style.borderColor="white";
        IdField=true
      }else{
        setFailureProgress(i)
        e.style.borderColor="red";
        IdField=false
      }
    }else if(i==3){
      if(isValidNumber(e.value)){
        setSuccessProgress(i+1)
        e.style.borderColor="white";
        levelField=true
      }else{
        setFailureProgress(i+1)
        e.style.borderColor="red";
        levelField=false
      }
    }else if(i==4){
      if(IsValidRange(e.value)){
        setSuccessProgress(i+2)
        e.style.borderColor="white";
      }else{
        setFailureProgress(i+2)
        e.style.borderColor="red";
      }
    }else if(i==5){
      if(IsValidRange(e.value)){
        setSuccessProgress(i+2)
        e.style.borderColor="white";
      }else{
        setFailureProgress(i+2)
        e.style.borderColor="red";
      }
    }
    checkAllFieldOk()
  })
  if(i==3||i==4||i==5){

    e.addEventListener("focusin",()=>{
      var indx=0;
      if(i==3){
        indx=4
      }else if(i==4){
        indx=6
      }else if(i==5){
        indx=7
      }
      if(AllProgress[indx].firstElementChild.querySelector("i")!=null &&AllProgress[indx].firstElementChild.querySelector("i").classList.contains("fa-minus")){
        AllProgress[indx].firstElementChild.removeChild(AllProgress[indx].firstElementChild.querySelector("i"));
        AllProgress[indx].firstElementChild.innerHTML+=CorrectElement;
      }
    })
  }
  })

function countEnailCorrect(str) {
  let progress = 0;

  if (str[0]<='z'&& str[0]>='a'|| str[0]<='Z'&& str[0]>='A') {
    progress += 1;
  }

  if (str.includes('@')) {
    progress += 1;
    if (str[str.indexOf('@')+1]<='z'&& str[str.indexOf('@')+1]>='a'|| str[str.indexOf('@')+1]<='Z'&& str[str.indexOf('@')+1]>='A') {
      progress += 1;
    }
  }

    if (str.includes('.')) {
    progress += 1;
  }
  console.log(progress)
  return progress;
}
function countSpacesWithoutFirst(str) {
  var counter=0;
  // str1=str.trim()
  // if(str1.length!==str.length && str[str.length-1]==' '){
  //   counter+=1
  // }
  let filteredArray = str.split(' ').filter(function(value) {
    return value !== '';
  }); 
  counter+=(filteredArray.length)
  return counter
}





function validateFullName(fullName) {
  const nameParts = fullName.trim().split(/\s+/);

  // Check if the name has at least four parts
  if (nameParts.length < 4) {
      return false;
  }

  // Check if any part is empty
  for (const part of nameParts) {
      if (part === '') {
          return false;
      }
  }

  // If all conditions are met, return true
  return true;
}
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isValidNumber(level){
  if(parseInt(level)>=1 && parseInt(level)<=5){
    return true;
  }
  return false;
}

function IsValidID(inputID) {
  var regex = /^(2020|2021|2022|2023|2024)\d{7}$/;
  return regex.test(inputID)
}
function IsValidRange(inputExepreince){
  if(inputExepreince>=0&&inputExepreince<=5)
      return true;
  return false
}
const selected = document.getElementById("Faculty");
selected.addEventListener("focusin",(e)=>{
  if(AllProgress[3].firstElementChild.querySelector("i")!=null &&AllProgress[3].firstElementChild.querySelector("i").classList.contains("fa-minus")){
    AllProgress[3].firstElementChild.removeChild(AllProgress[3].firstElementChild.querySelector("i"));
    AllProgress[3].firstElementChild.innerHTML+=CorrectElement;
  }
})
selected.addEventListener("focusout",(e)=>{
  
  if(isValidSelection(e.value)){
    setSuccessProgress(3)
    selected.style.borderColor="white";
    FacultyField=true
    checkAllFieldOk()
  }else{
    setFailureProgress(3)
    selected.style.borderColor="red";
    FacultyField=false
  }
})
function isValidSelection() {
  var selectedFaculty=document.getElementById("Faculty").value;
  console.log(selectedFaculty)
  return selectedFaculty !=="";
}
const checkboxes = document.querySelectorAll('.Box');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let checkedCount = numberCheckedElement();
        if (checkedCount > 2) {
            checkbox.checked = false;
        }else{
          ClearAllFiled();
          handleAppearFields();
        }
        checkAllFieldOk()
        if(AllProgress[5].firstElementChild.querySelector("i")!=null &&AllProgress[5].firstElementChild.querySelector("i").classList.contains("fa-minus")){
          AllProgress[5].firstElementChild.removeChild(AllProgress[5].firstElementChild.querySelector("i"));
          AllProgress[5].firstElementChild.innerHTML+=CorrectElement;
        }
    });
    checkbox.addEventListener('focusout', () => {
      let checkedCount = numberCheckedElement();
      if (checkedCount == 0) {
        setFailureProgress(5)
        checkbox.style.borderColor="red";
        checkAllFieldOk()
      }else{
        setSuccessProgress(5,90)
        checkbox.style.borderColor="white";
        checkAllFieldOk()
      }
  });
});
function ClearAllFiled(){
  AllField[AllField.length - 1].parentElement.style.display="none"
  AllField[AllField.length - 2].parentElement.style.display="none"
  AllProgress[AllProgress.length-1].style.display="none"
  AllProgress[AllProgress.length-2].style.display="none"
}
function handleAppearFields(){
  let checkedCount = 1;
  checkboxes.forEach(e => {
    if (e.checked) {
          AllField[AllField.length - checkedCount].parentElement.style.display="block"
          AllField[AllField.length - checkedCount].previousElementSibling.innerHTML=`Experience in `+e.getAttribute("label");
          AllProgress[AllProgress.length-checkedCount].style.display="block"
        checkedCount++;
    }
  });
  return checkedCount;

}
function numberCheckedElement(){
  let checkedCount = 0;
  checkboxes.forEach(e => {
    if (e.checked) {
        checkedCount++;
    }
  });
  return checkedCount;

}
function checkAllFieldOk(){
  var buttonSumbit = document.getElementById("buttonSumbit");
  if(userName&&Email&&IdField&&FacultyField&&levelField&& numberCheckedElement()!=0){
    buttonSumbit.removeAttribute("disabled")
  }else{
    buttonSumbit.setAttribute("disabled", "disabled")
  }
}