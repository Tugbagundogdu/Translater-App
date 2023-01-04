const fromLang = document.getElementById('fromLang');
const toLang = document.getElementById('toLang');
const fromText = document.getElementById('fromText');
const toText = document.getElementById('toText');
const button = document.getElementById('btn');
const exchange = document.querySelector(".exchange");

for(let lang in languages){
    let options = `
        <option value = ${lang}>${languages[lang]}</option>;
    `
    fromLang.insertAdjacentHTML('beforeend',options);
    toLang.insertAdjacentHTML('beforeend', options);

    fromLang.value = "tr-TR";
    toLang.value = "en-GB"
}

button.addEventListener('click', () =>{
    let text = fromText.value;
    let from = fromLang.value;
    let to = toLang.value;

    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to} `;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        toText.value = data.responseData.translatedText;
    })
  
})

exchange.addEventListener('click', ()=>{
    let text = fromText.value;
    fromText.value = toText.value;
    toText.value = text;

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang;

})