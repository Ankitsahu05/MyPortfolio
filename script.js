
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){ /*jab 
    sidebarGo hoga tab 'ham' ko dikhana h aur 'cross' ko hide karna h */
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'   
    }
    else{
        document.querySelector('.ham').style.display='none'
        /* cross icon ko 'sidebar' aane ke 350 miliseconds ke baad laao*/
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'
        }, 250);
    }
})