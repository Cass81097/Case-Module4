
$('.feat-btn').click(function(){
    $('.menu .sub-menu .feat-show').toggleClass("show");
    $('.menu .sub-menu .first').toggleClass("rotate");
});
$('.serv-btn').click(function(){
    $('.menu .sub-menu .serv-show').toggleClass("show1");
    $('.menu .sub-menu .second').toggleClass("rotate");
});
$('.menu .sub-menu li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
 

let alertDm = document.querySelector('.dm');
alertDm.addEventListener('click', function() {
    alert('Chưa làm xong hí hí');
})

function page(){
    alert('Làm màu thôi');
}

let body = document.querySelector('body');
let sidebar = document.querySelector('.sidebar');
let toggle = body.querySelector('.toggle');
let searchSidebar = body.querySelector('.search-box');

toggle.addEventListener('click', function() {
    sidebar.classList.toggle('close');
});

searchSidebar.addEventListener('click', function() {
    sidebar.classList.remove('close');
});