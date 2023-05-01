const body = document.querySelector('body');
body.classList.add('body');

const arrayKeyboard = [
    81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76,
    90, 88, 67, 86, 66, 78, 77,
];
const generateButton = () => {
    let resultButton = '';
    for (let i = 0; i < arrayKeyboard.length; i++) {
        if (i == 10 || i == 19) {
            resultButton += '<div class="clearfix"></div>';
        }
        resultButton +=
            '<div class="keyboard" data="' +
            arrayKeyboard[i] +
            '">' +
            String.fromCharCode(arrayKeyboard[i]) +
            '</div>';
    }
    body.innerHTML = resultButton;
};
generateButton();

// Чтобы определить, нажимает ли пользователь клавишу, всегда используйте событие onkeydown .
body.onkeydown = function (event) {
    let activeBtn = body.querySelector(
        '.keyboard[data= "' + event.which + '"]'
    );
    activeBtn.classList.add('active');
};

// body.querySelectorAll('keyboard').forEach(function (element) {
//     element.classList.remove('active');
// });
