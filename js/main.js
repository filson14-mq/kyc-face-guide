require(['zolozRealIdCore'], function (zoloz) {
    var Zoloz = zoloz.default;
    var zolozCore = new Zoloz();
    var button = document.getElementById('continue-btn');

    function buttonClick(event) {
        event.target.disabled = true;
        var promise = zolozCore.end('next');

        promise.then(function () {
            event.target.disabled = false;
        });
    }

    document.addEventListener('back', function (event) {
        event.preventDefault();
        zolozCore.end('back');
    });
    button.onclick = buttonClick;
});
