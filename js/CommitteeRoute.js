let allCommitteeButton=document.querySelectorAll('button.btn')
allCommitteeButton.forEach((ele)=>{
  ele.addEventListener("click",()=>{
    route=ele.getAttribute("href");
    
    if(route==null){
      return
    }
    window.location=route;
  })

})