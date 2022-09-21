// import
(function() {
  // const zolozRealIdCore = new ZolozRealIDCore();

  const buttonClick = () => {
    console.log('dziala');

    // console.log(zolozRealIdCore);
  };

  const button = document.querySelector('button');
  console.log(button);
  button.onclick = buttonClick;
})();

