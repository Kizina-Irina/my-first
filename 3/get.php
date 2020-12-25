<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Happy New Year</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="get.css">
  </head>
  <body>
    <div class="navbar">
      <div class="logo">
       <h4>HappyNewYear <i class="fa fa-tree" aria-hidden="true"></i></h4>
      </div> 
      <ul class="links">
        <li><a href="../main.php">Главная</a></li>
        <li><a href="../4/galary.php">Галерея</a></li>
        <li><a href="../2/dress-tree.php">Нарядить ёлку</a></li>
        <li><a href="get.php">Получить поздравление от Деда Мороза</a></li>
      </ul>
    </div>
    <div class="flex">
      <div class="congratulation">Привет, дорогой друг! 
      В Новый Год так приятно получать поздравления, 
      поэтому мы подготовили для тебя поздравительную открытку, 
      скроее нажимай --></div>
      <button class="btn btn-success open-modal-button animate__animated animate__tada">Получить поздравление</button>
    </div>
    <div class="modal">
      <div class="modal-window animate__animated animate__fadeIn" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title">Поздравление</h3>
              <button type="button" class="close close-times-button">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>Желаю, чтобы жизнь была красочной, яркой, наполненной прекрасными событиями, чтобы Новый Год принес счастье! Удачу! Победу во всех делах! Пусть 2021 год будет ярче, счастливей, лучше и богаче прежнего!</p>
              <p>Морозная свежесть, душистая хвоя Волшебною сказкой войдут в Новый год! Под звуки часов мелодичного боя Безбрежное счастье на Вас снизойдет! Желаю в любви красоты романтизма, Здоровья, уюта, тепла очага! Достойного дела, удач, оптимизма, И близкой души, что всегда дорога!</p>
              <p>Я хочу, чтоб в год Быка cтала ваша жизнь легка. Пусть все тяготы уйдут, денежки ручьем текут, пусть здоровье укрепится, а плохое не случится.
              © http://pozdravok.ru
              </p>
              </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary close-button">Спасибо</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gifts">
      <div class="gift">
        <img src="image/gift1.jpg" alt="">
      </div>
      <div class="gift">
        <img src="image/gift2.jpg" alt="">
      </div>
      <div class="gift">
        <img src="image/gift3.jpg" alt="">
      </div>
    </div>
    <footer>
      <div class="footer">
        <ul>
          <li class="icon">
            <a href="http://kizina07.beget.tech/diplom/main.php"><i class="fa fa-home fa-fw" aria-hidden="true"></i></a>
          </li>
          <li class="icon">
            <a href="https://vk.com/"><i class="fa fa-vk" aria-hidden="true"></i></a>
          </li>
          <li class="icon">
            <a href="https://www.instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></i></a>
          </li>
        </ul>
        <span>Design by Kizina Irina &copy 2020</span>
      </div>
    </footer>
    <script src="https://use.fontawesome.com/2e6c195951.js"></script>
    <script src="get.js"></script>  
  </body>
</html>