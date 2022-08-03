let numberId = document.getElementById('num');
let adviceArticle = document.getElementById('advice');

async function getResponse () {
    let response = await fetch ('https://api.adviceslip.com/advice');
    let data = await response.json();

    numberId.innerText = data.slip.id;
    adviceArticle.innerText = data.slip.advice;
}

getResponse();


document.getElementById('icon-dice').onclick = function () {
    location.reload();
}