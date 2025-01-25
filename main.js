
const head = document.querySelectorAll('.question');

head.forEach(function (ele) {
    const btn = ele.querySelector('.question-one');
    const icon = ele.querySelector('img');

    
    btn.addEventListener('click' , () => {
        ele.classList.toggle('active') ;
        
        if(ele.classList.contains('active')){
            icon.src = "./assets/images/icon-minus.svg"
        }else{
            icon.src = "./assets/images/icon-plus.svg"

        }
    })
    

})

