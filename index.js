const servicesNames=document.querySelectorAll(".services-name");
const currentImage=document.querySelector(".image-of-services");

servicesNames.forEach(servicesName => {
    servicesName.addEventListener("click",event=>{
        const currentlyActive=document.querySelector(".services-name.active");
        if(currentlyActive && currentlyActive!== servicesName){
            currentlyActive.classList.toggle("active");
            currentlyActive.nextElementSibling.style.maxHeight= 0;
            currentlyActive.style.color="rgb(46, 65, 89)";
        }
        servicesName.classList.toggle("active");

        var servicesDesc=servicesName.nextElementSibling;
        console.log(servicesName.firstElementChild);

        if(servicesName.classList.contains("active")){
            servicesDesc.style.maxHeight= servicesDesc.scrollHeight+"px";
            servicesName.style.color="rgb(46, 94, 159)";
            if(servicesName.firstElementChild.innerText==="Cardiology"){
                currentImage.src="https://bootstrapmade.com/demo/templates/Medilab/assets/img/departments-1.jpg";   
            }
            if(servicesName.firstElementChild.innerText==="Neurology"){
                currentImage.src="https://bootstrapmade.com/demo/templates/Medilab/assets/img/departments-2.jpg";
            }
            if(servicesName.firstElementChild.innerText==="Pediatrics"){
                currentImage.src="https://www.news-medical.net/image.axd?picture=2014%2F7%2F147059167-620x480.jpg";
            }
            if(servicesName.firstElementChild.innerText==="Eye Care"){
                currentImage.src="https://bootstrapmade.com/demo/templates/Medilab/assets/img/departments-5.jpg";
            }
        }
        else{
            servicesDesc.style.maxHeight=0; 
            servicesName.style.color="rgb(46, 65, 89)";


        }
        
    });


    
});

