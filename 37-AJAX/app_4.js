alert('app_4 загружен');

function someAppFunction() {
  alert('someAppFunction_4 запушенна');
}
/*


function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  // без обработки ошибок
  // script.onload = () => callback(); // console.log('this', this);

  // с обработкой ошибки
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

  document.head.append(script);
}

loadScript('./app_1.js', function (error, script) {
  console.log('error : ', error);
  console.log('script : ', script);
  if (error) {
    alert(`${error}`);
  }
  else {
    // эта функция вызовется после того, как загрузится скрипт
    someAppFunction(); // теперь всё работает
  }
});

*/
