const link = document.querySelector('link');
const test = document.querySelector('.cont2')
const logo = document.querySelector('.logo');
const logoW = document.querySelector('.logoW');
const logo_shadow = document.querySelector('.logo_shadow');
const svg1 = document.querySelector('.right-pink-hill-box');
const purple_hill = document.querySelector('.purple-hill-box1');
const purple_hill_shadow = document.querySelector('.purple-hill-box2');
const purple_hill_c = document.querySelector('.purple-hill');
const purple_hill_shadow_c = document.querySelector('.purple-hill-shadow');
const right_pink_hill = document.querySelector('.right-pink-hill-box');
const multy_Triangle = document.querySelector('.multy-Triangle-box1');
const multy_Triangle_shadow = document.querySelector('.multy-Triangle-box2');
const circle = document.querySelector('.circle');
const circleglow = document.querySelector(".circleglow");
const triangle1 = document.querySelector('.triangle1');
const triangle3 = document.querySelector('.triangle3');
const rectangle1 = document.querySelector('.rectangle1');
const rectangle2 = document.querySelector('.rectangle2');
const rectangle3 = document.querySelector('.rectangle3');
const rectangle4 = document.querySelector('.rectangle4');


  logo.addEventListener('mouseenter', (event) => {
    if (event.relatedTarget === triangle3) {'click'
    return;}
    logo.style.width = "35%";
    logoW.style.width = "35%";
    right_pink_hill.style.left="12%";
    multy_Triangle.style.left="-31.31%";
    multy_Triangle_shadow.style.left="-21.4%";
  });

  logo.addEventListener('click', () => {
    logo.style.width = '55%';
    logoW.style.width = '55%';
    purple_hill_shadow_c.style.filter = 'blur(0px)';
    purple_hill_shadow.style.left = '-53%';
    purple_hill_shadow.style.top = '20%';
    purple_hill_c.style.filter = 'blur(0px)';
    purple_hill.style.left = '-53%';
    purple_hill.style.top = '20%';
    right_pink_hill.style.left = '60%';
    multy_Triangle.style.left = '-100%';
    multy_Triangle_shadow.style.left = '-100%';
    rectangle1.style.height = '0%';
    rectangle2.style.height = '50%';
    rectangle3.style.height = '50%';
    rectangle4.style.height = '0%';
    triangle1.style.opacity = '0%';
    triangle1.style.left = '48.55%';
    triangle1.style.scale = '100%';
    triangle3.style.scale = '100%';
  });
  
  logo.addEventListener('mouseleave', (event) => {
    if (event.relatedTarget === triangle3) {'mouseenter'
    return;}
    logo.style.width = '32%';
    logoW.style.width = '32%';
    purple_hill_shadow_c.style.filter = 'blur(3px)';
    purple_hill_shadow.style.top = '33%';
    purple_hill_shadow.style.left = '-50.8%';
    purple_hill_c.style.filter = 'blur(3px)';
    purple_hill.style.top = '33%';
    purple_hill.style.left = '-50.8%';
    right_pink_hill.style.left = '8%';
    multy_Triangle.style.left = '-27%';
    multy_Triangle_shadow.style.left = '-17.6%';
    rectangle1.style.height = '25%';
    rectangle2.style.height = '25%';
    rectangle3.style.height = '25%';
    rectangle4.style.height = '25%';
    triangle1.style.opacity = '0%';
    triangle1.style.left = '47.9%';
    triangle1.style.scale = '62%';
    triangle3.style.scale = '0%';
  });

  triangle3.addEventListener('mouseenter', () => {
    circle.style.left = "64%";
    circle.style.top = "10%";
    circleglow.style.left = "64%";
    circleglow.style.top = "10%";
    triangle1.style.opacity = '100%';
    triangle1.style.animation = 'fillTriangle1 0.5s linear forwards';
    rectangle2.style.backgroundColor = '#30387B';
    rectangle3.style.backgroundColor = '#412C6E';
    purple_hill_c.style.fill = '#D3C3FF';
    purple_hill_shadow_c.style.fill = '#28187A';
    logoW.style.top = '49.78%';
    logoW.style.left = '50.15%';
    logoW.style.opacity = '100%';
    logo_shadow.style.opacity = '100%';
    logo_shadow.style.height = '70%';
  });

  triangle3.addEventListener('mouseleave', () => {
    circle.style.left = "92%";
    circle.style.top = "70%";
    circleglow.style.left = "92%";
    circleglow.style.top = "70%";
    triangle1.style.zIndex = '9';
    triangle1.style.animation = 'fillTriangle2 0.5s linear forwards';
    rectangle2.style.backgroundColor = '#bde0fe';
    rectangle3.style.backgroundColor = '#ffafcc';
    purple_hill_c.style.fill = '#c57cff';
    purple_hill_shadow_c.style.fill = '#9b61fa';
    logoW.style.top = '50%';
    logoW.style.left = '50%';
    logoW.style.opacity = '0%';
    logo.style.opacity = '100%'; 
    logo_shadow.style.opacity = '0%';
    logo_shadow.style.height = '20%';
  });
  
  triangle3.addEventListener('click', () => {
    logo_shadow.style.opacity ='0%'
    triangle1.style.zIndex = '12';
    triangle1.style.scale = '5000%';
    rectangle3.style.backgroundColor = '#FFD466';
    logoW.style.opacity = '0%';
    logo.style.opacity = '0%'; 
  });

  test.addEventListener('mouseleave', () => {
    purple_hill_shadow_c.style.filter = 'blur(3px)';
    purple_hill_c.style.filter = 'blur(3px)';
  });

  test.addEventListener('mouseenter', () => {
    purple_hill_shadow_c.style.filter = 'blur(0px)';
    purple_hill_c.style.filter = 'blur(0px)';
  });

  triangle3.addEventListener('click', () => {
    triangle1.style.zIndex = '12';
    triangle1.style.scale = '5000%';
    rectangle3.style.backgroundColor = '#FFD466';
    logo_shadow.style.fill = 'transparent';
    logoW.style.opacity = '0%';
    logo.style.opacity = '0%'; 
    setTimeout(function() {
        window.location.href = "secondPage.html";
      }, 500);
  });
