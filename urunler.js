const tulperde=document.querySelector("#tulperde");
const fonperde=document.querySelector("#fonperde");
const kruvazeperde=document.querySelector("#kruvazeperde");
const storperde=document.querySelector("#storperde");
const zebraperde=document.querySelector("#zebraperde");
const pliseperde=document.querySelector("#pliseperde");
const eklenecekalan=document.querySelector(".product-part");

write(tulperde);

tulperde.addEventListener("click",()=>write(tulperde));
fonperde.addEventListener("click",()=>write(fonperde));
storperde.addEventListener("click",()=>write(storperde));
zebraperde.addEventListener("click",()=>write(zebraperde));
pliseperde.addEventListener("click",()=>write(pliseperde));
kruvazeperde.addEventListener("click",()=>write(kruvazeperde));

const tulperdeisimler=["","","","","","","","","","","","","","","","","","","",""];
const fonperdeisimler=["","","","","","","","","Tül Fon Perde","","","","","","","","","","",""];
const kruvazeperdeisimler=["",""];
const storperdeisimler=[""];
const zebraperdeisimler=["","","","",""];
const pliseperdeisimler=["Plain Plise Perde","Plain Plise Perde","Plain Plise Perde","Plain Plise Perde","Plain Plise Perde","Plain Plise Perde","Black Out Plise Perde","Crep Plise Perde","Jakar Core Plise Perde","Plain Plise Perde","Tauch Plise Perde","Black Out Plise Perde","Jakar Core Plise Perde","Plain Plise Perde","Tauch Plise Perde","Black Out Plise Perde","Jakar Core Plise Perde","Plain Plise Perde","Jakar Core Plise Perde","Plain Plise Perde","Plain Plise Perde","Plain Plise Perde","Plain Plise Perde","Plain Plise Perde","","","Black Out Plise Perde","Crep Plise Perde","Jakar Core Plise Perde","Plain Plise Perde","Tauch Plise Perde"];

function write(result){
    let sayac=0;
    const id=result.value;
    eklenecekalan.innerHTML="";
    fetch("https://api.github.com/repos/Melih-Yilmaz06/PicturesForWebSite/contents")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            if((element.name).startsWith(id)){
                const img=document.createElement("img");
                const div=document.createElement("div");
                const p=document.createElement("p");
                if(result==tulperde) p.innerHTML=tulperdeisimler[sayac];
                else if(result==fonperde) p.innerHTML=fonperdeisimler[sayac];
                else if(result==storperde) p.innerHTML=storperdeisimler[sayac];
                else if(result==zebraperde) p.innerHTML=zebraperdeisimler[sayac];
                else if(result==pliseperde) p.innerHTML=pliseperdeisimler[sayac];
                else if(result==kruvazeperde) p.innerHTML=kruvazeperdeisimler[sayac];
                sayac++;
                div.class="card-div";
                img.src=element.download_url;
                img.className="picture-card";
                div.appendChild(img);
                div.appendChild(p);
                eklenecekalan.appendChild(div);
            }
        });
    });
}