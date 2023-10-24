const AllReadMore=document.querySelectorAll(".ReadMoreBtn")
const TitleCurrentEvent=document.getElementById("TitleCurrentEvent")
const HistoryCurrentEvent=document.getElementById("HistoryCurrentEvent")

const DetailCurrentEvent=document.getElementById("DetailCurrentEvent")
const ImageCurrentEvent=document.getElementById("ImageCurrentEvent")

window.onload=()=>{

  console.log(AllReadMore)
  AllReadMore.forEach((ele)=>{
    ele.addEventListener("click", () => {

      console.log()
      const p = ele.parentNode.parentNode.querySelector("p").innerHTML;
      const h2 = ele.parentNode.parentNode.querySelector("h2").textContent;
      const img = ele.parentNode.parentNode.parentNode.querySelector(".ImageCardContainer img");
      const history= ele.parentNode.parentNode.parentNode.querySelector(".history").textContent;
      TitleCurrentEvent.textContent=h2;
      DetailCurrentEvent.innerHTML=p;
      HistoryCurrentEvent.textContent=history;
      console.log(img.src)
      console.log(ImageCurrentEvent.src)
      ImageCurrentEvent.src=img.src;
    })
  
  
  })
}