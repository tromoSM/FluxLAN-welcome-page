const LINKLOOKUP='https://raw.githubusercontent.com/tromoSM/tromoSM-assets/refs/heads/main/root/info.json'
const PROJECTLOOKUP='https://raw.githubusercontent.com/tromoSM/tromoSM-assets/refs/heads/main/repos/FLUXLAN/manifest.json'
window.addEventListener('DOMContentLoaded',function(){
 fetch(LINKLOOKUP).then(n=>
  n.json()).then(nf=>{
    document.querySelector('[github]').href=nf.contact.github
    document.querySelector('[feedback]').href=nf.pages.feedback+"&utm_source=fluxlan_welcome"
 })
 fetch(PROJECTLOOKUP).then(i=>i.json()).then(info=>{
    console.log(info.assets.logo.black)
    document.querySelector('[logo]').src=info.assets.logo.black
    document.querySelector('[icon="black"]').href=info.assets.icons.black
    document.querySelector('[icon="white"]').href=info.assets.icons.white
    if(info.assets.logo.dynamic.type=='svg'){
     document.querySelector('[crisplogo]').src=info.assets.logo.dynamic.link
    }
    else{
     document.querySelector('[crisplogo]').src=info.assets.logo.black
    }
 })
 const info=new URLSearchParams(window.location.search);
 let port='84'
 if(info.get('r')){
    port=info.get('r')
    if(info.get('r')!='null'||info.get('r')!=null){
        port=3113
    }
 }
  document.querySelector('[open-dash]').addEventListener('click',function(){
    window.location.replace(`https://localhost:${port}/dashboard`)
  })

})