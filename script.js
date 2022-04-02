function changeNavBg(){
    var navId=document.getElementById("nav-bar");
    var scrollValue=window.scrollY;
    if(scrollValue>100){
        navId.classList.add("nav-bg");
    }
    else{
        navId.classList.remove("nav-bg");
    }
}

window.addEventListener('scroll',changeNavBg);

$(".nav-icon").click(function(){
    $(".nav-list").toggleClass("nav-show")
    $("#nav-bar").toggleClass("nav-bg")
})

/*=======================================product page=====================*/
function selfun(a){
  var img1=a.getAttribute("src");
  var img2=a.dataset.image2;
  var img3=a.dataset.image3;
  var img4=a.dataset.image4;
  var img5=a.dataset.image5;
  localStorage.setItem("imageUrl1",img1);
  localStorage.setItem("imageUrl2",img2);
  localStorage.setItem("imageUrl3",img3);
  localStorage.setItem("imageUrl4",img4);
  localStorage.setItem("imageUrl5",img5);
  var heading=a.dataset.itemheading;
  var desc=a.dataset.itemdesc;
  localStorage.setItem("item-heading",heading);
  localStorage.setItem("item-desc",desc);
  var touchData=a.getAttribute("data-touch");
  localStorage.setItem("touchdata",touchData);
  var touchxlData=a.getAttribute("data-touchxl");
  localStorage.setItem("touchxldata",touchxlData);
  var preledData=a.getAttribute("data-preled");
  console.log(preledData);
  localStorage.setItem("preleddata",preledData);
  var ledData=a.getAttribute("data-led");
  localStorage.setItem("leddata",ledData);
  var gtledData=a.getAttribute("data-gtled");
  localStorage.setItem("gtleddata",gtledData);
}

/*=============side bar=================*/

function categorySelector(x){
    console.log("clicked")
    
    var idName=x.dataset.category;
    document.getElementById(idName).style.display="block";
    var mainCategory=document.getElementsByName("main-cat");
    for(var i=0;i<mainCategory.length;i++){
        if(mainCategory[i].id!=x.id){
            var temp=mainCategory[i].dataset.category;
            document.getElementById(temp).style.display="none"
            var subList=mainCategory[i].dataset.sublist;
            document.getElementById(subList).style.display="none"
        }
    }
    var subList=x.dataset.sublist;
    console.log(subList);
    if(x.checked){
        document.getElementById(subList).style.display="block";
        selectedId=x.id;
        labels=document.getElementsByTagName("label");
        for(var i=0;i<labels.length;i++){
            if(labels[i].htmlFor==selectedId){
                labels[i].style.color="#f1b732";
            }
            else{
                labels[i].style.color="white";
            }
        }
    }
    else{
        document.getElementById(subList).style.display="none";
    }
}
/*====================checkbox section===============*/
function CardioCategorySelector(x){
    console.log(x.id)
    var subCat=x.dataset.subcategory;
    console.log(subCat);
    var categoryCards=document.getElementsByClassName(subCat);
    if(x.checked){
        for(var i=0;i<categoryCards.length;i++){
            categoryCards[i].style.display="block";
        }
        
    }
    else{
        for(var i=0;i<categoryCards.length;i++){
            categoryCards[i].style.display="none";
        }
    }
}

function strengthCategorySelector(x){
    var subCat=x.dataset.subcategory;
    var categoryCards=document.getElementsByClassName(subCat);
    if(x.checked){
        for(var i=0;i<categoryCards.length;i++){
            categoryCards[i].style.display="block";
        }
        
    }
    else{
        for(var i=0;i<categoryCards.length;i++){
            categoryCards[i].style.display="none";
        }
    }
}
/*==================================================*/



/*================================item page==================*/
function itemGallerySelector(e){
    var imageLocation=document.getElementById("item-image");
    imagePath=e.getAttribute("src");
    imageLocation.src=imagePath;
    var galleryTiles=document.getElementsByClassName("gallery-tile");
    for(var i=0;i<galleryTiles.length;i++){
        galleryTiles[i].style.borderColor="black";
    }
    e.parentNode.style.borderColor="#f1b732";
}


function consoleSelector(e){
    document.getElementById("item-console").innerHTML=e.dataset.consolename;
    var consoleIcons=document.getElementsByClassName("console-select-icon");
    /*============to sow and hide yellow icons over console=======*/
    for(var i=0;i<consoleIcons.length;i++){
        consoleIcons[i].style.display="none";
    }
    e.previousElementSibling.style.display="block";

    var itemImage=document.getElementById("item-image");
    var galleryImages=document.getElementsByClassName("gallery-tile-img");
    var c1=localStorage.getItem("touchdata");
    var c2=localStorage.getItem("touchxldata");
    var c3=localStorage.getItem("preleddata");
    var c4=localStorage.getItem("leddata");
    var c5=localStorage.getItem("gtleddata");
    imagePack1=JSON.parse(c1);
    imagePack2=JSON.parse(c2);
    imagePack3=JSON.parse(c3);
    imagePack4=JSON.parse(c4);
    imagePack5=JSON.parse(c5);
    imagePacks=[imagePack1,imagePack2,imagePack3,imagePack4,imagePack5];
    for(var j=0;j<imagePacks.length;j++){
        if(imagePacks[j].id!="undefined"){
            if(imagePacks[j].id==e.id){
                itemImage.src=imagePacks[j].image1;
                images=[imagePacks[j].image1,imagePacks[j].image2,imagePacks[j].image3,imagePacks[j].image4,imagePacks[j].image5];
                console.log(images);
                for(var i=0;i<galleryImages.length;i++){
                    if(images[i]!=undefined){
                        galleryImages[i].parentNode.style.display="inline-block";
                        galleryImages[i].src=images[i];
                    }
                    else{
                        galleryImages[i].parentNode.style.display="none";
                    }
                    
                }
            }
        }
        
    }
    var galleryTiles=document.getElementsByClassName("gallery-tile");
    for(var i=0;i<galleryTiles.length;i++){
        galleryTiles[i].style.borderColor="black";
    }
    galleryTiles[0].style.borderColor="#f1b732";
    
    
}


function goBack(){
    window.history.back();
}

