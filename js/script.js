var arrValue = ["country", "material", "volume", "heightCup", "pictureCup", "priceCup"];
var cupMassive = [];//массив всех объектов чашек
var buttonMassive = [];
var srcFotoMasive = [];//массив для src фоток чашек

// Включение формы регистрации
function goToForm() {
    document.getElementById('mainWindow').style.display = "none";
    document.getElementById('forFormBlock').checked = true;
    document.getElementById('errorBlock').style.display = "none";
}

function indexRun() {
    document.getElementById('cupButton1').onclick = goToForm;
    document.getElementById('cupButtonFinal').onclick = backToCup;
    document.getElementById('goToMainWind').onclick = backMainMenu;
    document.getElementById('registr').onclick = toRegistr;
    document.getElementById('enterToForm').onclick = toEnter;
    document.getElementById('zaregistr').onclick = enterToAccountForm;
    document.getElementById('enterToAccount').onclick = enterToSite;
    document.getElementById('exitBtn').onclick = backMainMenu;
    document.getElementById('profileBtn').onclick = drawProfile;
    alert("Возможности:" + "\n" + "1.Регистрация неограниченного колличества пользователей" + "\n" + "2.Происходит проверка почтовых ящиков и никнеймов на случай повторяющихся" + "\n" + "3.В аккаунте пользователь может отредактировать свой профайл (добавив/изменив свои данные неограниченное колличество раз)" + "\n" + "4.После выхода из аккаунта данные пользователя сохраняются в базу данных в виде массивов" + "\n" + "5.После этого можно зайти в аккаунт любому ранее зарегистрированому пользователю, его данные автоматически передаются в его профайл" + "\n" + "6.Первый зарегистрировавшийся пользователь становится админом" + "\n" + "7.Взаимодействие между окном профайла и главным окном происходит через localStorage");
}

function formcupRun() {
    document.getElementById('backToForm').onclick = backCrashCup;
    document.getElementById('resetAll').onclick = resetInputCup;
}

// Кнопка очистки всех полей
function resetInputCup() {
    var b = true;
    for (var i = 0; i < arrValue.length; i++) {
        document.getElementById(arrValue[i]).value = "";
    }
}

// Возврат из окна разбитой чашки
function backCrashCup() {
    document.getElementById('crashCup').checked = false;
}

// Создаём конструктор объекта чашка
var numberBtn = 0;

function Cup(Country, Material, Volume, HeightCup, PictureCup, PriceCup) {
    this.Country = Country;
    this.Material = Material;
    this.Volume = Volume;
    this.HeightCup = HeightCup;
    this.PictureCup = PictureCup;
    this.PriceCup = PriceCup;
    this.createCup = function createCup() {
        document.getElementById('wrapper').innerHTML += '<div class="cupCart"><div class="foto-block"><img src="' + localStorage.srcKey + '" alt=""></div><div class="dataTable"><div class="tableRow"><p> Страна производитель: </p><p>' + this.Country + '</p></div><div class="tableRow"><p> Материал: </p><p>' + this.Material + '</p></div><div class="tableRow"><p> Объём: </p><p>' + this.Volume + '</p></div><div class="tableRow"><p> Высота: </p><p>' + this.HeightCup + '</p></div><div class="tableRow"><p> Тематика декора, рисунка: </p><p>' + this.PictureCup + '</p></div><div class="tableRow"><p> Цена: </p><p>' + this.PriceCup + '</p></div></div><div id="cartButton' + numberBtn + '" class="cupButtonCart" onclick="openFinalWind ()">Готово</div></div>';
        srcFotoMasive.push(localStorage.srcKey);
        numberBtn++;
    }
    this.createFinalWind = function createFinalWind() {
        goToSpan(this.Material, this.Volume, this.HeightCup, this.PictureCup, this.Country, this.PriceCup);
    }
}

// Функция которая переносит вэл'ю в финальное окно
function goToSpan(matCont, valCont, higCont, temaCont, counCont, prcCont) {
    document.getElementById('mat').innerHTML = matCont;
    document.getElementById('val').innerHTML = valCont;
    document.getElementById('hig').innerHTML = higCont;
    document.getElementById('tema').innerHTML = temaCont;
    document.getElementById('coun').innerHTML = counCont;
    document.getElementById('prc').innerHTML = prcCont;
}

// Фунция отправки данных карточки
document.onmousemove = function (event) {
    for (var i = 0; i < buttonMassive.length; i++) {
        if (document.getElementById(buttonMassive[i]) == event.target) {
            cupMassive[i].createFinalWind();
            document.getElementById('fotoFinal').src = srcFotoMasive[i];
            break;
        }
    }
}

// Функция открытия финального окна
function openFinalWind() {
    document.getElementById('wrapper').style.display = "none";
    document.getElementById('finalWindMove').checked = true;
    document.getElementById('buttonCover').style.display = "none"
}

// Функция возврата к чашкам
function backToCup() {
    document.getElementById('finalWindMove').checked = false;
    document.getElementById('wrapper').style.display = "flex";
    document.getElementById('buttonCover').style.display = "block"
}

// Функция возврата на главную

function backMainMenu() {
    document.getElementById('finalWindMove').checked = false;
    document.getElementById('mainWindow').style.display = "flex";
    document.getElementById('buttonCover').style.display = "block"
    document.getElementById('buttonCover').innerHTML = ' ';
    document.getElementById('wrapper').innerHTML = " ";
    resetAllInput();
    document.getElementById('userBlock').style.display = "none";
    backDataFromStorage();
    // document.getElementById('mainForm').close;
    // formCupWindow.document.close();
}

///////////////////////////////////////////////////////////////////////////////

// Формы регистрации и входа
var idInputMasive = ["email", "passId", "nikId", "emailToAccount", "passToAccount"];//массив для айдишников инпутов
var nikNameUserMasive = [];//массив для имён пользователей;
var mailUserMasive = ["-1"];//массив для почтовых адрессов;
var passUserMasive = ["-1"];//массив для паролей;
var mailPassUserMasive = ["-1"];//массив для почты+пароля в строковом виде;
var cityUserMasive = [];//масив для городов проживания пользователей;
var birthUserMasive = [];//массив для дат рождения пользователей;
var phoneUserMasive = [];//массив для номеров телефонов пользователей;
var srcFotoUserMasive = [];//массив для src фоток пользователей
function toRegistr() {
    document.getElementById('enterForm').style.display = "none";
    document.getElementById('registrForm').style.display = "block";
    document.getElementById('errorBlock').style.display = "none";
    resetAllInput();
}

function toEnter() {
    document.getElementById('enterForm').style.display = "block";
    document.getElementById('registrForm').style.display = "none";
    document.getElementById('errorBlock').style.display = "none";
}

// Сброс всех инпутов на ноль
function resetAllInput() {
    for (i = 0; i < idInputMasive.length; i++) {
        document.getElementById(idInputMasive[i]).value = "";
        document.getElementById(idInputMasive[i]).style.border = "1px solid #aaa";
        document.getElementById(idInputMasive[i]).style.boxShadow = "none";
        document.getElementById(idInputMasive[i]).style.background = "#fff url(./img/red_asterisk.png) no-repeat 98% center";
    }
    result = false;
    document.getElementById('passId2').value = "";
    document.getElementById('passId2').style.border = "1px solid #aaa";
    document.getElementById('passId2').style.boxShadow = "none";
    document.getElementById('passId2').style.background = "#fff url(./img/red_asterisk.png) no-repeat 98% center";
    resultPass2 = false;
}

//Проверка заполнения формы регистрации
var checkMail = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/;
var checkPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})$/;
var checkNik = /^([A-Za-z0-9-]{2,25})$/;
var checkPhone = /^[\-( ]?(0)\d{2}[\-) ]?\d{3}([\- ]?\d{2}){2}$/;
var regExpMasive = [checkMail, checkPass, checkNik];

// Валидность форм регистрации для событий onBlur
var result = 0;

function validInput() {
    for (var i = 0; i < regExpMasive.length; i++) {
        if (regExpMasive[i].test(document.getElementById(idInputMasive[i]).value)) {
            document.getElementById(idInputMasive[i]).style.background = "#fff url(./img/valid.png) no-repeat 98% center";
            document.getElementById(idInputMasive[i]).style.boxShadow = "0 0 5px #5cd053";
            document.getElementById(idInputMasive[i]).style.borderColor = "#28921f";
            result++;
        } else {
            document.getElementById(idInputMasive[i]).style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
            document.getElementById(idInputMasive[i]).style.boxShadow = "0 0 5px #d45252";
            document.getElementById(idInputMasive[i]).style.borderColor = "#b03535";
        }
    }
    return result;
}

var resultPass2 = false;

function validPass2Input() {
    if ((document.getElementById('passId').value == document.getElementById('passId2').value) && (checkPass.test(document.getElementById('passId').value))) {
        document.getElementById('passId2').style.background = "#fff url(./img/valid.png) no-repeat 98% center";
        document.getElementById('passId2').style.boxShadow = "0 0 5px #5cd053";
        document.getElementById('passId2').style.borderColor = "#28921f";
        resultPass2 = true;
    } else {
        document.getElementById('passId2').style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
        document.getElementById('passId2').style.boxShadow = "0 0 5px #d45252";
        document.getElementById('passId2').style.borderColor = "#b03535";
    }
    return resultPass2
}

//Функции проверки заняты или нет логин и почтовый адрес
function occupMail() {
    var occupMailvar;
    var b = 0;
    for (i = 0; i < mailUserMasive.length; i++) {
        if (document.getElementById('email').value == mailUserMasive[i]) {
            document.getElementById('errorBlockItm2').innerHTML = "Такой почтовый ящик уже существует";
            document.getElementById(idInputMasive[0]).style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
            document.getElementById(idInputMasive[0]).style.boxShadow = "0 0 5px #d45252";
            document.getElementById(idInputMasive[0]).style.borderColor = "#b03535";
            b++;
        }
    }
    if (b == 0) {
        occupMailvar = true;
        document.getElementById('errorBlockItm2').innerHTML = "";
    }
    return occupMailvar;
}

function occupNik() {
    var occupNikvar;
    var b = 0;
    for (i = 0; i < nikNameUserMasive.length; i++) {
        if (document.getElementById('nikId').value == nikNameUserMasive[i]) {
            document.getElementById('errorBlockItm3').innerHTML = "Такой никнейм уже существует";
            document.getElementById(idInputMasive[2]).style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
            document.getElementById(idInputMasive[2]).style.boxShadow = "0 0 5px #d45252";
            document.getElementById(idInputMasive[2]).style.borderColor = "#b03535";
            b++;
        }
    }
    if (b == 0) {
        occupNikvar = true;
        document.getElementById('errorBlockItm3').innerHTML = "";
    }
    return occupNikvar;
}

// Джейсон данные
var dataUserForJason = {
    "adminMasive": [],
    "userMasive": []
}
// Переходим к форме входа в аккаунт
var firstVisit = 0;

function enterToAccountForm() {
    occupMail();
    occupNik();
    if ((result >= 6) && (resultPass2) && (occupMail()) && (occupNik())) {
        toEnter();
        userExamp = new personalData(document.getElementById('email').value, document.getElementById('nikId').value, document.getElementById('passId').value);
        if (firstVisit == 0) {
            dataUserForJason.adminMasive.push(userExamp);
        } else {
            dataUserForJason.userMasive.push(userExamp);
        }
        firstVisit++;
        resetAllInput();
        document.getElementById('errorBlock').style.display = "block";
        document.getElementById('errorBlock').style.backgroundColor = "#00aced";
        document.getElementById('errorBlockItm').innerHTML = "Вы успешно зарегистрировались";
        alert('После нажатия кнопки "Зарегистрироваться" на сервак отправляем JSON объект:' + JSON.stringify(dataUserForJason));
        cityUserMasive.push("-1");
        birthUserMasive.push("-1");
        phoneUserMasive.push("-1");
        srcFotoUserMasive.push("img/avatar.jpg");
    } else {
        document.getElementById('errorBlock').style.display = "block";
        document.getElementById('errorBlock').style.backgroundColor = "#dd6c6c";
        document.getElementById('errorBlockItm').innerHTML = "Вы не прошли регистрацию";
    }
}

// Конструктор регистрационных данных пользователя
function personalData(BoxMail, NikName, Pass) {
    this.BoxMail = BoxMail;
    this.NikName = NikName;
    this.Pass = Pass;
    nikNameUserMasive.push(this.NikName);
    mailUserMasive.push(this.BoxMail);
    passUserMasive.push(this.Pass);
    this.IndividMassive = [this.BoxMail, this.Pass];
    this.strMailPassUserMasive = this.IndividMassive.join();
    mailPassUserMasive.push(this.strMailPassUserMasive);
}

// Вешаем onBlur на инпуты входа в аккаунт
function checkEmail() {
    var b = 0;
    for (i = 0; i < mailUserMasive.length; i++) {
        if (document.getElementById('emailToAccount').value == mailUserMasive[i]) {
            document.getElementById('emailToAccount').style.background = "#fff url(./img/valid.png) no-repeat 98% center";
            document.getElementById('emailToAccount').style.boxShadow = "0 0 5px #5cd053";
            document.getElementById('emailToAccount').style.borderColor = "#28921f";
            b++
        }
    }
    if (b == 0) {
        document.getElementById('emailToAccount').style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
        document.getElementById('emailToAccount').style.boxShadow = "0 0 5px #d45252";
        document.getElementById('emailToAccount').style.borderColor = "#b03535";
    }
}

function checkPassword() {
    var c = 0;
    for (i = 0; i < passUserMasive.length; i++) {
        if (document.getElementById('passToAccount').value == passUserMasive[i]) {
            document.getElementById('passToAccount').style.background = "#fff url(./img/valid.png) no-repeat 98% center";
            document.getElementById('passToAccount').style.boxShadow = "0 0 5px #5cd053";
            document.getElementById('passToAccount').style.borderColor = "#28921f";
            c++;
        }
    }
    if (c == 0) {
        document.getElementById('passToAccount').style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
        document.getElementById('passToAccount').style.boxShadow = "0 0 5px #d45252";
        document.getElementById('passToAccount').style.borderColor = "#b03535";
    }
}

// Кнопка входа в аккаунт
var tempData;

function enterToSite() {
    tempData = document.getElementById('emailToAccount').value + ',';
    tempData += document.getElementById('passToAccount').value;
    for (var i = 0; i < mailPassUserMasive.length; i++) {
        if (tempData == mailPassUserMasive[i]) {
            searchName();
            document.getElementById('userBlock').style.display = "flex";
            document.getElementById('errorBlock').style.display = "none";
            document.getElementById('forFormBlock').checked = false;
            document.getElementById('wrapper').style.display = "flex";
            document.getElementById('buttonCover').innerHTML = '<div id="moreCup" onclick="drawForm()"><p>Ещё одну чашку</p></div>';
            drawForm();
            helloUser();
            countEnter();
        } else {
            document.getElementById('errorBlock').style.display = "block";
            document.getElementById('errorBlock').style.backgroundColor = "#dd6c6c";
            document.getElementById('errorBlockItm').innerHTML = "Пользователь с такой электронной почтой или паролем не найден";
            document.getElementById('emailToAccount').style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
            document.getElementById('emailToAccount').style.boxShadow = "0 0 5px #d45252";
            document.getElementById('emailToAccount').style.borderColor = "#b03535";
            document.getElementById('passToAccount').style.background = "#fff url(./img/invalid.png) no-repeat 98% center";
            document.getElementById('passToAccount').style.boxShadow = "0 0 5px #d45252";
            document.getElementById('passToAccount').style.borderColor = "#b03535";
        }
    }
}

// Функция поиска имени юзера по почте и создания объекта со всеми данными пользователя для передачи в localstorage
var indexUser;

function searchName() {
    var tempUserName;
    for (i = 0; i < mailUserMasive.length; i++) {
        if (document.getElementById('emailToAccount').value == mailUserMasive[i]) {
            tempUserName = nikNameUserMasive[i - 1];
            indexUser = i;
            var allDataUserObj = {
                "nameUser": nikNameUserMasive[i - 1],
                "cityUser": cityUserMasive[i - 1],
                "birthUser": birthUserMasive[i - 1],
                "phoneUser": phoneUserMasive[i - 1],
                "mailUser": mailUserMasive[i],
                "fotoProfileUser": srcFotoUserMasive[i - 1]
            }
        }
    }
    localStorage.setItem('localUserData', JSON.stringify(allDataUserObj));
    return tempUserName;
}

// Функция определения времени и приветствия
function helloUser() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 17) {
        greeting = 'Добрый вечер,';
    } else if (hourNow > 11) {
        greeting = 'Добрый день,';
    } else if (hourNow > 5) {
        greeting = 'Доброе утро,';
    } else if (hourNow >= 0 && hourNow < 5) {
        greeting = 'Доброй ночи,';
    } else {
        greeting = 'Приветствуем,';
    }
    document.getElementById('greetings').innerHTML = greeting + " " + searchName();
}

// Функция счётчика входа
var count = 1;

function countEnter() {
    document.getElementById('round').innerHTML = count;
    count++;
}

// Функция отрисовки формы создания чашки
function drawForm() {
    var formCupWindow = window.open('', 'mainForm', 'height=600,width=800,top=50,left=150');
    str = '<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>cup_karnaukh</title><link rel="stylesheet" href="css/styles_formcup.css"><link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></head><body onload="formcupRun()" style="background-color: #FFFFFF;"><div class="wrapperForm"><div class="mainForm"><form class="contact_form" action="#" method="post" name="contact_form"><ul><li><h2>Создай свою чашку</h2><span class="required_notification">* Поля обязательные для заполнения</span></li><li><label for="name">Страна производитель:</label><input id="country" type="text"  placeholder="Украина" maxlength="30" required /><span class="form_hint">Например:Китай, Украина, Россия...</span></li><li><label for="name">Материал:</label><input id="material" type="text"  placeholder="Керамика" maxlength="30" required /><span class="form_hint">Например:Керамика, Фарфор, Алюминий...</span></li><li><label for="name">Объём:</label><input id="volume" type="text"  placeholder="200 мл" maxlength="30" required /><span class="form_hint">Например:200 мл, 0.5 л...</span></li><li><label for="name">Высота:</label><input id="heightCup"  type="text"  placeholder="100 мм" maxlength="30" required /><span class="form_hint">Например:100 мм, 200 мм...</span></li><li><label for="name">Тематика декора, рисунка:</label><input id="pictureCup" type="text"  placeholder="Природа" maxlength="30" required /><span class="form_hint">Например:Природа, спорт, фильмы...</span></li><li><label for="name">Цена:</label><input id="priceCup" type="text"  placeholder="150 грн" maxlength="30" required /><span class="form_hint">Например:150 грн, 200 грн...</span></li><li id="li_1" ><label class="description" for="element_1">Загрузить фотографию</label><div><input id="element_1" name="element_1" class="element file" type="file" onchange="openFile(event)"><span class="form_hint">Поддерживаемый формат: jpg</span></div></li><li><div id="validForm" class="done" href="" >Готово</div><div id="resetAll" class="restart" href="">Отменить</div></li></ul></form></div></div><input id="crashCup" type="checkbox" hidden=""><div class="modal-wrap" aria-hidden="true" role="dialog"><div class="crashData"><p>Вы не заполнили  все поля. Для наиболее полного формирования Вашего заказа заполните обязательные поля! </p><div id="backToForm" class="restart2">Назад</div></div></div><script src="js/scripts.js"></script></body></html>';
    formCupWindow.document.write(str);
    var onclickValidform = formCupWindow.document.getElementById("validForm");
    onclickValidform.onclick = addCupIn;

    function addCupIn() {
        addCup(formCupWindow);
    }

    formCupWindow.document.close();
}

function addCup(formCupWindow) {
    var country = formCupWindow.document.getElementById("country");
    var material = formCupWindow.document.getElementById("material");
    var volume = formCupWindow.document.getElementById("volume");
    var heightCup = formCupWindow.document.getElementById("heightCup");
    var pictureCup = formCupWindow.document.getElementById("pictureCup");
    var priceCup = formCupWindow.document.getElementById("priceCup");
    if (country.value !== "" && material.value !== "" && volume.value !== "" && heightCup.value !== "" && pictureCup.value !== "" && priceCup.value !== "") {
        CupExamp = new Cup(country.value, material.value, volume.value, heightCup.value, pictureCup.value, priceCup.value);
        CupExamp.createCup();
        cupMassive.push(CupExamp);
        buttonMassive.push('cartButton' + (numberBtn - 1));
        formCupWindow.close();
    } else {
        formCupWindow.document.getElementById('crashCup').checked = true;
    }
    formCupWindow.document.close();
}

// Функция для кнопки редактирования профайла
function checkProfile() {
    var b = false;
    var c = false;
    var d = false;
    if (checkMail.test(document.getElementById('mailProfile').value)) {
        document.getElementById('errorMail').style.display = "none";
        b = true;
    } else {
        document.getElementById('errorMail').style.display = "block";
    }
    if (checkNik.test(document.getElementById('nikProfile').value)) {
        document.getElementById('errorNik').style.display = "none";
        c = true;
    } else {
        document.getElementById('errorNik').style.display = "block";
    }
    if (checkPhone.test(document.getElementById('phoneProfile').value) || document.getElementById('phoneProfile').value == "") {
        d = true;
        document.getElementById('errorPhone').style.display = "none";
    } else {
        document.getElementById('errorPhone').style.display = "block";
    }
    if ((b) && (c) && (d)) {
        readProfile();
        self.close();
    }
}

// Функция отрисовки формы редактирования профайла
function drawProfile() {
    var profileUserWindow = window.open('', 'profileWindow', 'height=790,width=550,top=50,left=150');
    str = '<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>cup_karnaukh</title><link rel="stylesheet" href="css/profile.css"></head><body onload="createProfile()"><div class="wrapperForm"><div class="mainForm"><div class="mainFotoProfile"><div class="container"><img id="outputFotoUser"  alt=""></div></div><form class="contact_form" action="#" method="post" name="contact_form"><ul><li><h2>Изменить свой профиль</h2></li><li><label>Ник:</label><div><input id="nikProfile" type="text"  placeholder="User" maxlength="30" required  /><span id="errorNik" class="errorSpan">Только буквы (A-Z a-z) и цифры (0-9), не меньше 3 и не больше 25 символов</span></div></li><li><label>Город:</label><input id="cityProfile" type="text"  placeholder="Киев" maxlength="30" required /></li><li><label>Дата рождения:</label><input id="birthday" type="date" name="birth"></li><li><label>Телефон:</label><input id="phoneProfile"  type="text"  placeholder="0501234567" maxlength="30" required /><span id="errorPhone" class="errorSpan">Формат (050)000-00-00, 0501234567 или 050 123 45 67</span></li><li><label>E-mail:</label><input id="mailProfile" type="text"  placeholder="john_doe@example.com" maxlength="30" required /><span id="errorMail" class="errorSpan">Введите корректный e-mail</span></li><li id="li_1" ><label class="description" for="element_1">Загрузить фотографию</label><div><input id="fotoProfile" name="element_1" type="file" onchange="openFotoFile(event)"/></div></li><li><div id="validProfile" class="done" href="" onclick="checkProfile()" >Готово</div></li></ul></form></div></div><script src="js/scripts.js"></script></body></html>';
    profileUserWindow.document.write(str);
    profileUserWindow.document.close();
}

function createProfile() {
    var allDataUserObj = {};
    if (localStorage.getItem("localUserData")) {
        allDataUserObj = JSON.parse(localStorage.getItem("localUserData"));
    }
    document.getElementById('nikProfile').value = allDataUserObj.nameUser;
    if (allDataUserObj.cityUser == -1) {
        document.getElementById('cityProfile').value = "";
    } else {
        document.getElementById('cityProfile').value = allDataUserObj.cityUser;
    }
    if (allDataUserObj.birthUser == -1) {
        document.getElementById('birthday').value = "";
    } else {
        document.getElementById('birthday').value = allDataUserObj.birthUser;
    }
    if (allDataUserObj.phoneUser == -1) {
        document.getElementById('phoneProfile').value = "";
    } else {
        document.getElementById('phoneProfile').value = allDataUserObj.phoneUser;
    }
    document.getElementById('mailProfile').value = allDataUserObj.mailUser;
    document.getElementById('outputFotoUser').src = allDataUserObj.fotoProfileUser;
}

//Функция сбора данных с инпутов редактора профайла и возврата этих данных в localStorage
function readProfile() {
    var allDataUserObj = {
        "nameUser": document.getElementById('nikProfile').value,
        "cityUser": document.getElementById('cityProfile').value,
        "birthUser": document.getElementById('birthday').value,
        "phoneUser": document.getElementById('phoneProfile').value,
        "mailUser": document.getElementById('mailProfile').value,
        "fotoProfileUser": localStorage.localFotoUser
    }
    localStorage.setItem('localUserData', JSON.stringify(allDataUserObj));
}

//Функция передачи данных из localStorage в массивы при выходе из аккаунта
function backDataFromStorage() {
    var allDataUserObj = {};
    if (localStorage.getItem("localUserData")) {
        allDataUserObj = JSON.parse(localStorage.getItem("localUserData"));
    }
    nikNameUserMasive[indexUser - 1] = allDataUserObj.nameUser;
    cityUserMasive[indexUser - 1] = allDataUserObj.cityUser;
    birthUserMasive[indexUser - 1] = allDataUserObj.birthUser;
    phoneUserMasive[indexUser - 1] = allDataUserObj.phoneUser;
    mailUserMasive[indexUser] = allDataUserObj.mailUser;
    srcFotoUserMasive[indexUser - 1] = allDataUserObj.fotoProfileUser;
}

//Функция добавления фоток чашек и фоток пользователей
var openFile = function (event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        localStorage.srcKey = dataURL;
    }
    reader.readAsDataURL(input.files[0]);
}
var openFotoFile = function (event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('outputFotoUser');
        output.src = dataURL;
        localStorage.localFotoUser = dataURL;
    }
    reader.readAsDataURL(input.files[0]);
}