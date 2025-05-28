const slides = document.querySelectorAll('.slide'); //объект докбюмент с методом квериселекшен - получаем слайды

for (const slide of slides){    //на каждой итерации создается переменная слайд из массива слайдс
    slide.addEventListener('click', ()=>{
        clearActiveClasses()
        slide.classList.add('active')//при клике - добавляется клаа эктив
    })
}

function clearActiveClasses(){ //очищаем активные классы 
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}