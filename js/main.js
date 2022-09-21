import Zoloz from "./vendor/zolozRealIdCore";

(function () {
    const zolozCore = new Zoloz();
    const button = document.querySelector('button');

    const buttonClick = async (event) => {
        console.log('continue to camera', event);
        event.target.disabled = true;
        await zolozCore.end('next');
        event.target.disabled = false;
    };

    document.addEventListener('back', e => {
        e.preventDefault();
        zolozCore.end('back');
    });
    button.onclick = buttonClick;
})();

