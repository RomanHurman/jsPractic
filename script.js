  // Pollyfill for old browsers
  Array.prototype.map = function(countArr){
    var numbers = [];
      for(i = 0; i < this.length; i++){
      numbers[i] = countArr(this[i]);
}
    return numbers;
}
   var num = [1, 2, 4, 6];
   var double = num.map(function(sum){
   return sum * 2;
});
  console.log(double);

  // Explaine this event loop
  console.log(1);
  console.log(2);
  setTimeout(() => {
   console.log(3);
  },0);
  console.log(4);
  // Відповідь така,тому що спочатку виконається основна анонімна функція,а потім вже функція з setTimeout з відкладеним виконанням яка стоїть у черзі.

  // Implement function delay 10s
  const rec = (go) => {
     setTimeout(() => {
        if(go > 1){
         console.log(go);
         rec(go -1);
     } else {
         console.log(go);
     }
     }, 2000);
  }
  rec(10)

  // Implement Promise inside promise
  const drinking = {
    beer(count) {
      const promise = new Promise(function(resolve, reject){
      const One_Beer_Shoot = 500;
        if(!count || count > 6) {
    reject();
}
    setTimeout(() => {
  console.log(`Випито ${count} Пляшок Пива(це мало для мене)`);
   resolve();
}, One_Beer_Shoot * count);
  console.log("Починаю пити пивко!");
});
    return promise;
},
  vodka(count) {
    const promise = new Promise(function(resolve, reject){
    const One_Vodka_Shoot = 700;
      if(!count || count > 10) {
  reject();
}
    setTimeout(() => {
  console.log(`Випито ${count} Пляшок Водки(трохи стало краще)`);
  resolve();
}, One_Vodka_Shoot * count);
  console.log("Почав пити горілку!");
});
    return promise;
},
  whiskey(count) {
    const promise = new Promise(function(resolve, reject){
    const One_Whiskey_Shoot = 900;
      if(!count || count > 15) {
reject();
}
    setTimeout(() => {
  console.log(`Випито ${count} Пляшок Віскі(хочу ще)`);
  resolve();
}, One_Whiskey_Shoot * count);
  console.log('Почав пити віскі!');
});
    return promise;
}
}
  drinking.beer(5).then(() => {
    return drinking.vodka(9);
})
  .then(() => {
    return drinking.whiskey(13);
})
  .catch((err) => {
    console.log('Я вже напився!');
})

  // Create function prime numbers
  function prime (num) {
      if(num > 2) {
          for(i = 2; i < num; i++) {
              if(num % i === 0) {
                  break;
              }else if(num - i == 1) {
                  console.log(num);
              }
          }
          prime(num - 1);
      }else{
          console.log(num);
      }
  }
  prime(10)

  // Create function Constructor
  function Auto (mark = "toyota", volume = "2.5L", price = 30000, year = 2016){
     this.mark  = mark;
     this.volume = volume;
     this.price = price;
     this.year = year;
     this.getTax = function(price){
         return (price * 0.2) + (0.01 * 2.5 * price);
     };
     this.getDiscount = function(currentYear){
         return (currentYear - year) * 0.1 * price;
     }
  };

  const auto1 = new Auto("audi", "3.5L", 40000, 2015);
  const auto2 = new Auto("bmw", "2.0L", 50000, 2016);
  const auto3 = new Auto("mercedes", "4.0L", 60000, 2014);


  const currentYear = 2019;
  auto1.getDiscount(currentYear);
  auto2.getDiscount(currentYear);
  auto3.getDiscount(currentYear);