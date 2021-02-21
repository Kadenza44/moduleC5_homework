
const inputPage = document.getElementById('input_page')
const inputLimit = document.getElementById('input_limit')
const btn = document.getElementById('btn')
const infoInputPage = document.getElementById('info_input_page')
const infoInputLimit = document.getElementById('info_input_limit')
const resultReqest = document.getElementById('resylt_reqest')

resultReqest.innerHTML = localStorage.getItem('res')

function checkInputPage(){
    if(inputPage.value>=1 && inputPage.value<=10){
        infoInputPage.innerHTML = `<p style="color: green; font-size: 12px; margin: 0;">Верно</p>`
        return true
    }else{
        infoInputPage.innerHTML = `<p style="color: red; font-size: 12px; margin: 0;">Некорректный номер страницы</p>`
        return false
    }
}

function checkInputLimit(){
    if(inputLimit.value>=1 && inputLimit.value<=10){
        infoInputLimit.innerHTML = `<p style="color: green; font-size: 12px; margin: 0;">Верно</p>`
        return true
    }else{
        infoInputLimit.innerHTML = `<p style="color: red; font-size: 12px; margin: 0;">Некорректный лимит</p>`
        return false
    }
}


btn.addEventListener('click', ()=>{
    const page = checkInputPage()
    const limit = checkInputLimit()

    if(page && limit){
        fetch(`https://picsum.photos/v2/list?page=${inputPage.value}&limit=${inputLimit.value}`)

        .then((response)=>{
            return response.json()
        })

        .then((json)=>{
            result = ''
            json.forEach(element => {
                result += `<div class="card"><img src="${element.download_url}"></div>`              
            });

            localStorage.setItem('res', result)

            resultReqest.innerHTML = result

        })

        .catch((error)=>{
            resultReqest.innerHTML = `<p style="color: red;">Ошибка запроса, ${error}</p>`
        })
    }else{
        resultReqest.innerHTML = `<p style="color: red;">Проверьте введенные данные</p>`
    }

    
    

})