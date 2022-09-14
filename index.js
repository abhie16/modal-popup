const openBtn = document.querySelector('button');
const closeBTn = document.querySelector('#close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', opneModal);

function opneModal(){
    modal.style.display = 'grid';
}

closeBTn.addEventListener('click', closeModal);
function closeModal(){
    modal.style.display = 'none';
}


modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})