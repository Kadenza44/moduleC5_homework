
const button = document.getElementById('btn_reqest')
const displayResult = document.getElementById('res_reqest')
const inputWidth = document.getElementById('input_width')
const inputHeigth = document.getElementById('input_height')



button.addEventListener('click', ()=>{
    
    const width = inputWidth.value
    const heigth = inputHeigth.value

    if((width>=100 && width<=300) && (heigth>=100 && heigth<=300)){

        fetch(`https://picsum.photos/${width}/${heigth}`)
        
        .then((response)=>{
            displayResult.innerHTML = `<img src="${response.url}">`
        })

        .catch((error)=>{
            console.log('Проблемка нарисовалась', error)
            displayResult.innerHTML = `<p style="color: red;">Ошибочка вышла ${error}</p>`
        })

        
    }else{
        displayResult.innerHTML = `<p style="color: red;">Введите корректные данные</p>`
    }

    

})