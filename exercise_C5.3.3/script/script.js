const button = document.querySelector('button')
const info = document.getElementById('info')
const result_reqest = document.getElementById('result_reqest')

const xhr = new XMLHttpRequest() 

function reqest(url, callback){
    xhr.open('GET', url, true)
    xhr.onload = function(){
        if(xhr.status != 200){
            console.log('Статус ответа', xhr.status)
        } else{
            const result = JSON.parse(xhr.response)
            if(callback){
                callback(result);
            }
        }
    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
        };    
    }

    xhr.send()
}

function display(res){
    let img = ''
    res.forEach(element => {
        const elementCard = `
        <div class="card">
            <img class="image" src="${element.download_url}" alt="Автор - ${element.author}">
        </div>`
        img += elementCard
    })
    result_reqest.innerHTML = img
}



button.addEventListener('click', () => {
    const valueInput = document.querySelector('input').value;
    if(valueInput>=1 && valueInput<=10){
        const url = `https://picsum.photos/v2/list?limit=${valueInput}`
        reqest(url, display)
    } else{
        result_reqest.innerHTML = '<p>Введите корректное значение</p>'
    }
    
})
