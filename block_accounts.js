const allowed_accounts = [
    'dunes_tcd',
    'tcdneurosoc',
    'tcdjolysoc',
    'tcdbotsoc',
    'tcdjewishsociety',
    'tcdrussiansoc',
    'tcdtradsoc',
    'tcdculinarysoc',
    'duzoosoc',
    'duboxingclub',
    'spacex',
    'nasa',
    'nasawebb',
    'nasajpl'
];


function hidePosts() {
    document.querySelectorAll('article').forEach(function(article) {
        let account_element = article.querySelector('span._ap3a._aaco._aacw._aacx._aad7._aade');
        let account_string = account_element.textContent.trim()
        console.log(account_string)
        if (!allowed_accounts.includes(account_string)){
            article.style.display = 'none';
        }
    });
}

hidePosts();


const callback = function(){
    hidePosts();
}

let observer = new MutationObserver(callback);
const config = { childList: true, subtree: true};
var target = document.body;
observer.observe(target, config)