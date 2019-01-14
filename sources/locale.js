var changeLocaleService = (function () {

var locale;

function loadLocale(defLang) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://localhost:3000/locale.json', true);
    xhr.onreadystatechange = saveLocale.bind(this);
    xhr.onerror = function () { console.log("no found page"); };
    xhr.send();

    function saveLocale() { if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        locale = JSON.parse(xhr.responseText);
        console.log("locale loaded");
        if(defLang) changeLocale(defLang);
    } }
}

function changeLocale(lang) {
    if (!locale[lang]) return console.log("no found language");
    else {
        changeText('locale', locale[lang]);
        changeInputs('locale-contacts-form',locale[lang]["contacts"]["form"]);
    }


    function changeText(name, object) {
        for (key in object)
            if (Array.isArray(object[key]) && typeof object[key] != 'string' && typeof object[key][0] == 'string') getArrayText(key, object, name);
            else if (typeof object[key] == "object" ){
                if(isNaN(key)) changeText(name + "-" + key, object[key]);
                else changeText(name, object[key]);
            }
            else getText(key, object, name);
    }
    function getText(key, object, name) {
        for (elementKey in document.getElementsByClassName(name + "-" + key))
            if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key];

    }
    function getArrayText(key, object, name) {
        for (elementKey in document.getElementsByClassName(name + "-" + key))
            if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key][elementKey % object[key].length];
    }
    function changeInputs(name, object) {
        for (key in object)
        for (elementKey in document.getElementsByClassName(name + "-" + key))
            if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].placeholder = object[key];

    }

}

    return {
        loadLocale: loadLocale,
        changeLocale: changeLocale
    }
}());