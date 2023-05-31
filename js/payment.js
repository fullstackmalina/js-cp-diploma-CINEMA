
      const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats')); // получаем объект выбранных мест
      const selectedFilmInfo = JSON.parse(sessionStorage.getItem('selectSeanse'));

      const titleFilm = document.querySelector('.ticket__details.ticket__title');
      titleFilm.innerHTML += `${selectedFilmInfo.filmName}`;

      let totalPrice = 0;
      const seatInfo = document.querySelector('.ticket__details.ticket__chairs');
      for (let seat of selectedSeats) {
          seatInfo.innerHTML += ` ${seat.row}/${seat.seat} `; // отображаем информацию о месте
          totalPrice += Number(seat.price); // вычисляем общую стоимость
      }

      const titleHall = document.querySelector('.ticket__details.ticket__hall');
      const titleHallValue = selectedFilmInfo.hallName.substr(selectedFilmInfo.hallName.length - 1)
      titleHall.innerHTML += `${titleHallValue}`;

      const filmStart = document.querySelector('.ticket__details.ticket__start');
      filmStart.innerHTML += `${selectedFilmInfo.seanceTime}`;

      const totalPriceInfo = document.querySelector('.ticket__details.ticket__cost');
      totalPriceInfo.innerHTML += `${totalPrice}руб.`; // отображаем общую стоимость

      const acceptButton = document.querySelector('.acceptin-button');
      acceptButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'ticket.html'; // переход на страницу ticket.html
      });


      
    