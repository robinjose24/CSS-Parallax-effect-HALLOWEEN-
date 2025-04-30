let text=document.getElementById('text');
let treeleft=document.getElementById('tree-left');
let treeright=document.getElementById('tree-right');
let gateright=document.getElementById('gate-right');
let gateleft=document.getElementById('gate-left');


window.addEventListener('scroll',()=>{
    let pixels=window.scrollY;
    text.style.marginTop=pixels*2.5+'px';
    treeleft.style.left=pixels*-2.5+'px';
    treeright.style.left=pixels*2.5+'px';
    gateleft.style.left=pixels*0.5+'px';
    gateright.style.left=pixels*-0.5+'px';
});
