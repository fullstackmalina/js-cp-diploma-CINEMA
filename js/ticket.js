
const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats')); // получаем объект выбранных мест
const selectedFilmInfo = JSON.parse(sessionStorage.getItem('selectSeanse'));

const titleFilm = document.querySelector('.ticket__details.ticket__title');
titleFilm.innerHTML += `${selectedFilmInfo.filmName}`;

let timeStamp = Number(selectedFilmInfo.seanceTimeStamp);
let date = new Date(timeStamp);
let dataSeance = date.toLocaleDateString("ru-Ru", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
    
let totalPrice = 0;
const seatInfo = document.querySelector('.ticket__details.ticket__chairs');
for (let seat of selectedSeats) {
    seatInfo.innerHTML += ` ${seat.row}/${seat.seat} `; // отображаем информацию о месте
    totalPrice += Number(seat.price); // вычисляем общую стоимость
};
const seatInfoForQR = seatInfo.innerHTML;


const titleHall = document.querySelector('.ticket__details.ticket__hall');
const titleHallValue = selectedFilmInfo.hallName.substr(selectedFilmInfo.hallName.length - 1)
titleHall.innerHTML += `${titleHallValue}`;

const filmStart = document.querySelector('.ticket__details.ticket__start');
filmStart.innerHTML += `${selectedFilmInfo.seanceTime}`;


const totalPriceInfo = document.querySelector('.ticket__details.ticket__prise');
totalPriceInfo.innerHTML += `${totalPrice}руб.`; // отображаем общую стоимость


const QRgenetator = `
Фильм: ${selectedFilmInfo.filmName}
Зал: ${titleHallValue}
Ряд/Место: ${seatInfoForQR}
Дата: ${dataSeance}
Начало сеанса: ${selectedFilmInfo.seanceTime}

Билет действителен строго на свой сеанс!
`;

const qrcode = QRCreator(QRgenetator);

// const someFunctWithSelect = () => {
const content = (qrcode) =>{
return qrcode.error
    ? `недопустимые исходные данные ${qrcode.error}`
    : qrcode.result;
};

document.getElementById("qrcode").append("", content(qrcode));


