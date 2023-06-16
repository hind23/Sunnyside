let ham=document.querySelector('.hamburger');
let e=()=>
{
    
}
ham.addEventListener('click', ()=>
{
     var ul=document.querySelector('ul');
    if(ul.style.visibility=='hidden')
    {
        ul.style.visibility='visible'  ;
    }
    else 
    {
        ul.style.visibility='hidden'  ;

    }
})
document.addEventListener("click", function(e) 
{
    var element = e.target;

    var ul=document.querySelector('ul');
    if(ul.style.visibility=='visible' && element!=ham)
    {
        ul.style.visibility='hidden'  ;
    }
});