const Zoloz = require('./vendor/zolozRealIdCore');
console.log(Zoloz);

(function () {
    // const zolozRealIdCore = new Zoloz();

    const buttonClick = () => {
        console.log('dziala');

        console.log(zolozRealIdCore);
    };

    const button = document.querySelector('button');
    console.log(button);
    button.onclick = buttonClick;
})();

