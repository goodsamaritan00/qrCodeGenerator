const wrapper = document.getElementById('wrapper')
const imgWrapper = document.getElementById('imgWrapper')
const generateBtn = document.getElementById('generate');
const clearBtn = document.getElementById('clear')
const qrImg = document.getElementById('qrImg');
const input = document.getElementById('input')

generateBtn.addEventListener('click', () => {
    
    imgWrapper.innerHTML = '';

    let qrValue = input.value;

    if(!qrValue) return;



    let qrImg = document.createElement('img');
    imgWrapper.appendChild(qrImg);

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    clearBtn.addEventListener('click', () => {
    
    imgWrapper.innerHTML = ''
})
})

