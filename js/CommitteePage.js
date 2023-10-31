var AllContemtHeader=document.querySelectorAll(".headerContentItem")

AllContemtHeader.forEach((ele)=>{
  ele.addEventListener("click",()=>{
    var bodyContent=ele.nextElementSibling;
    if(ele.classList.contains("ActiveheaderContentItem")){
      ele.querySelectorAll("p")[1].textContent="+"
      bodyContent.classList.remove("ActiveBodyContent")
      bodyContent.style.maxHeight = 0 + "px";
      function removeEventListener() {
        bodyContent.removeEventListener("transitionend", RemovingActive);
      }
      
      bodyContent.addEventListener("transitionend", RemovingActive);
      
      function RemovingActive() {
        
        ele.classList.remove("ActiveheaderContentItem")
        removeEventListener();
      }
    }else{
      if(bodyContent.scrollHeight!=0 ){    
        bodyContent.classList.add("ActiveBodyContent")
        ele.classList.add("ActiveheaderContentItem")
        ele.querySelectorAll("p")[1].textContent="-"
        bodyContent.style.maxHeight = bodyContent.scrollHeight + "px";
      }
    }




    

    
  })
})