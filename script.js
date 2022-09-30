
//elements
var elements_to_watch = document.querySelectorAll('.watch')

//callback
var callback = function(items){
    items.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("in-page")
        }else{
            item.target.classList.remove("in-page")
        } 
    });
}

//observe
var observe = new IntersectionObserver(callback, { threshold: 0.6 });

//apply
elements_to_watch.forEach((element)=>{
    observe.observe(element);
})

//elements
var elements_to_watch = document.querySelectorAll('.watch2')

//callback
var callback = function(items){
    items.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("in-page2")
        }else{
            item.target.classList.remove("in-page2")
        } 
    });
}

//observe
var observe = new IntersectionObserver(callback, { threshold: 0.22 });

//apply
elements_to_watch.forEach((element)=>{
    observe.observe(element);
})


function goTo(p) {
    if(p == 0){
        window.location.href = "https://www.instagram.com/anforsyn/"
    }else if(p == 1){
        window.location.href = "https://www.facebook.com/AnforsynOfficial"
    }
}