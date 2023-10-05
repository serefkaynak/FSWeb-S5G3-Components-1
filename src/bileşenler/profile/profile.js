import "./profile.less";

// Kullanacağımız veri bu, üzerinde çalışın ama henüz hiçbir şeyi değiştirmeyin.
let menuElemanlari = [
    "Seçenek",
    "Ayarlar",
    "Yazılarım",
    "Draft",
  ];
  
  function menuYapici(menuElemanlari) {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'profile';
  
    const ul = document.createElement('ul');
    menuDiv.appendChild(ul);
  
  /*Adım 2: Fonksiyonun içinde, dizideki her öğe için bir liste <li> öğesi oluşturarak dizi üzerinde yineleme yapın.
    Tüm bu öğeleri <ul>'a ekleyin */
    menuElemanlari.forEach(eleman => {
      const li = document.createElement('li');
      li.textContent = eleman;
      ul.appendChild(li);
    });
  
  //  Adım 3: Hala fonksiyon içindeyiz, DOM'dan menü düğmesini seçin (`index.html` içinde `menu-button` sınıfına (class) sahip öğe).
    const menuButton = document.querySelector('.profile-button');
  
  //  Adım 4: Menü butonuna bir `click` event dinleyicisi ekleyin. Butona her tıklanıldığında div.menu classına `menu--open`('menu' class'ına sahip olan div) ekleyip/silecek(toogle).
    menuButton.addEventListener('click', () => {
      menuDiv.classList.toggle('profile--open');
    });
  
  //  Adım 5: Oluşturulan div.menu 'yü döndürmeyi unutmayın.
    return menuDiv;
  }
  
  //  Adım 6: 'menuYapici' fonksiyonunu ve 'menuElemanlari' dizisini kullanarak menüyü oluşturun, ve döndürülen menüyü header'e ekleyin.
  const LastMenu = menuYapici(menuElemanlari);
  document.querySelector('.header').appendChild(LastMenu);