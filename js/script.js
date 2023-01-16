// cursor start
let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove',function(e){
    cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top:' + e.clientY + 'px;';
});
// cursor end
// preloader start
let loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    loader.style.display = 'none';
});
// preloader end

// color pickr start
function colorOne() {
    document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-1)');
};

function colorTwo() {
    document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-2)');
};

function colorThree() {
    document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-3)');
};

function colorFour() {
    document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-4)');
};

function colorFive() {
    document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-5)');
};

function colorSix() {
    document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-6)');
};

function colorByPicker() {
    let colorpicker = document.getElementById('colorpicker');
    let color = colorpicker.value;
    document.documentElement.style.setProperty('--primary-color', color);
};
// function colorByPicker() {
//     var colorpicker = document.getElementById('colorpicker');
//     setInterval(() => {
//         var color = colorpicker.value;
//         document.documentElement.style.setProperty('--primary-color', color);
//     });
// };
$(document).ready(function () {
    $('.custom_clrs').hide();
    $('#setting').click(function () {
        $('.custom_clrs').stop().slideToggle(200);
    });
    
});
// color pickr end