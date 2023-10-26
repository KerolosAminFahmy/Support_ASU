const AllReadMore=document.querySelectorAll(".ReadMoreBtn")
const TitleCurrentEvent=document.getElementById("TitleCurrentEvent")
const HistoryCurrentEvent=document.getElementById("HistoryCurrentEvent")

const DetailCurrentEvent=document.getElementById("DetailCurrentEvent")
const ImageCurrentEvent=document.getElementById("ImageCurrentEvent")

window.onload=()=>{

  console.log(AllReadMore)
  AllReadMore.forEach((ele)=>{
    ele.addEventListener("click", () => {
      const p = ele.parentNode.parentNode.querySelector("p").innerHTML;
      const h2 = ele.parentNode.parentNode.querySelector("h2").textContent;
      const img = ele.parentNode.parentNode.parentNode.querySelector(".ImageCardContainer img");
      const history= ele.parentNode.parentNode.parentNode.querySelector(".history").textContent;
      TitleCurrentEvent.textContent=h2;
      DetailCurrentEvent.innerHTML=p;
      HistoryCurrentEvent.textContent=history;
      ImageCurrentEvent.src=img.src;
      const ShowMoreEvent = document.getElementById("ShowMoreEvent");
      ShowMoreEvent.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
        inline: "nearest" 
        
      });
    })
  
  
  })
}