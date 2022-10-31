let buttons = document.querySelector('.buttons');
let news = document.querySelector('.main_news_photos');
let text = document.querySelector('.text');
let link = document.querySelector('.link');

function openFirst() {
    news.classList.remove('scroll');
    news.classList.remove('scroll-full');
    text.textContent = '"Урожайная" проиграла "СДЮШОР Динамо"';
    link.href = 'first/first news.html';
}

function openSecond() {
    news.classList.add('scroll');
    news.classList.remove('scroll-full');
    text.textContent = 'Боевая ничья с "Энергетик БГАТУ"';
    link.href = 'second/second news.html';
}

function openThird() {
    news.classList.remove('scroll');
    news.classList.add('scroll-full');
    text.textContent = 'Небесная семья становится больше!"';
    link.href = 'third/third news.html';
}

buttons.addEventListener('click', (e) => {
    let target = e.target;
    if (target.id == 'first') {
        openFirst();
        clearInterval(timer);
        timer = setInterval(newsMove, 4000);
    }
    if (target.id == 'second') {
        openSecond();
        clearInterval(timer);
        timer = setInterval(newsMove, 4000);
    }
    if (target.id == 'third') {
        openThird();
        clearInterval(timer);
        timer = setInterval(newsMove, 4000);
    }
}
)

function newsMove() {
    if (news.classList.contains('scroll-full')) {
        openFirst();
    }
    else if (!news.classList.contains('scroll') && !news.classList.contains('scroll-full')) {
        openSecond();
    }
    else if (news.classList.contains('scroll')) {
        openThird();
    }


}

let timer = setInterval(newsMove, 2000)