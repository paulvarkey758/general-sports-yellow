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
    var scrollValue=window.scrollY;
    if(scrollValue<100){
        $("#nav-bar").toggleClass("nav-bg")
    }
    
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
  console.log(touchData);
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

/*=============side bar=================

/*====================checkbox section===============*/

/*==================cardio===============*/
$("#filter-cardio-sub-btn").click(function(e){
    e.preventDefault();
    console.log("called");
    var cardioCategory=document.getElementsByClassName("cardio-sub-category");
    var subCat;
    var catData=[];
    for(var i=0;i<cardioCategory.length;i++){
        subCat=cardioCategory[i].dataset.subcategory;
        var catCards=document.getElementsByClassName(subCat);
        if(cardioCategory[i].checked){
            /*catData.push(subCat);*/
            console.log("checked");
            for(var j=0;j<catCards.length;j++){
                catCards[j].style.display="block";
            }
        }
        else{
            catData.push(subCat);
            for(var j=0;j<catCards.length;j++){
                catCards[j].style.display="none";
            }
        }
    }
    console.log(catData);
    var catdata={};
    for(var i=0;i<catData.length;i++){
        /*catdata["catdata"+i]=catData[i];*/
        catdata[i]=catData[i];
    }
    catdata=JSON.stringify(catdata);
    console.log(catdata);
    localStorage.setItem("catData",catdata);
    var catlength=catData.length;
    localStorage.setItem("catlen",catlength);
    console.log(catlength);
    $(".sub-category-container").hide();

});

/*==============strength==================*/
$("#filter-strength-sub-btn").click(function(e){
    e.preventDefault();
    var strengthCategory=document.getElementsByClassName("strength-sub-category");
    var subCat;
    var catData=[];
    for(var i=0;i<strengthCategory.length;i++){
        subCat=strengthCategory[i].dataset.subcategory;
        var catCards=document.getElementsByClassName(subCat);
        if(strengthCategory[i].checked){
            console.log("checked");
            for(var j=0;j<catCards.length;j++){
                catCards[j].style.display="block";
            }
        }
        else{
            catData.push(subCat);
            for(var j=0;j<catCards.length;j++){
                catCards[j].style.display="none";
            }
        }
    }
    console.log(catData);
    var catdata={};
    for(var i=0;i<catData.length;i++){
        catdata[i]=catData[i];
    }
    catdata=JSON.stringify(catdata);
    console.log(catdata);
    localStorage.setItem("catData",catdata);
    var catlength=catData.length;
    localStorage.setItem("catlen",catlength);
    console.log(catlength);
    $(".sub-category-container").hide();
});

$("#filter-icon").click(function(){
    $(".sub-category-container").show();
});

$("#filter-cancel-btn").click(function(){
    $(".sub-category-container").hide();
});

/*=========================to refresh while selecting the category==========*/
/*===============cardio==============*/
$(".cardio-btn").click(function(){
    catdata={"0":"treadmills","1":"ascenttrainers","2":"ellipticals","3":"climbmills","4":"steppers","5":"cycles"};
    console.log(catdata);
    localStorage.setItem("catData",catdata);
    localStorage.setItem("catlen",6);
    window.location="cardio.html";
});

/*===============strength==============*/
$(".strength-btn").click(function(){
    catdata={"0":"single-station","1":"multi-station","2":"fr-weights","3":"plate-loaded","4":"racks-platforms"};
    console.log(catdata);
    localStorage.setItem("catData",catdata);
    localStorage.setItem("catlen",5);
    window.location="strength.html";
});


/*==========to load the producs of previously selected category===============*/
window.addEventListener("load",function(){
    var subcategories=localStorage.getItem("catData");
    var subcats=JSON.parse(subcategories);
    var catlength=localStorage.getItem("catlen");

    for(var i=0;i<catlength;i++){
        var temp=subcats[i];
        var selectedCategories=document.getElementsByClassName(temp);
        for(var j=0;j<selectedCategories.length;j++){
            selectedCategories[j].style.display="none";
        }

    }
})

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
    console.log(c3);
    imagePack1=JSON.parse(c1);
    console.log(imagePack1);
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

$("#cardio-page").click(function(){
    window.location="cardio.html";
});

$("#group-t-page").click(function(){
    window.location="gtraining.html";
});

$("#strength-page").click(function(){
    window.location="strength.html";
});

