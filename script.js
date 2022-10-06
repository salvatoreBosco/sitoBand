import observeFunction from './script/observeFunction.js'
import { story } from "./assets/data.js";
document.addEventListener('load', createstory())

observeFunction('.watch', 'in-page', 0.6)
observeFunction('.watch2', 'in-page2', 0.6)

function goTo(p) {
    if(p == 0){
        window.location.href = "https://www.instagram.com/anforsyn/"
    }else if(p == 1){
        window.location.href = "https://www.facebook.com/AnforsynOfficial"
    }
}

function createstory(){
    const divStory = document.querySelector('.story')
    const div = document.createElement('div')
    story.forEach(())
}

