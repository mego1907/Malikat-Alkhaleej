// Navbar
const navLink = document.querySelectorAll('.nav-item .nav-link'); // Navbar Link

for(let i =0; i < navLink.length; i++) {
    // Add Active Class When I Click On NavLink 
    navLink[i].addEventListener('click', ()=> {
        navLink.forEach((e)=> e.classList.remove('active')) // Remove Active
        navLink[i].classList.add('active'); // Add Active
    })
}



// cart
const productLists = document.querySelectorAll('.shop .products-list ul li'); // List Item
const catorgy = document.querySelectorAll('.shop .products-items .catorgy'); // Catorgy

for(let i = 0; i < productLists.length; i++) {
    productLists[i].addEventListener('click', () => {
        productLists.forEach((e)=> e.classList.remove('active'))
        productLists[i].classList.add('active');
        for(let x = 0; x < catorgy.length; x++) {
            if(productLists[i].dataset.catorgy == catorgy[x].id) {
                catorgy.forEach((e)=> e.classList.remove('active'));
                catorgy[i].classList.add('active');
            }
        }
            
    })    
}


// Counter in About Page
let counter = document.querySelectorAll('.user-banner .col-md-3 .counter p');
const userBanner = document.getElementById('userBanner');
console.log(document.documentElement.scrollTop)
console.log(userBanner.offsetTop)

document.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop >= document.querySelector('.user-banner').offsetTop - 200){
        console.log('Hello')
        setInterval(()=>{
            if(counter[0].innerHTML < 150) {
                counter[0].innerHTML++;
            }
            if(counter[1].innerHTML < 500) {
                counter[1].innerHTML++;
            }
            if(counter[2].innerHTML < 300) {
                counter[2].innerHTML++;
            }
            if(counter[3].innerHTML < 200) {
                counter[3].innerHTML++;
            }
        }, 60)
    } else{
        counter[0].innerHTML = 0;
        counter[1].innerHTML = 0;
        counter[2].innerHTML = 0;
        counter[3].innerHTML = 0;
    }  
})

    


/* Sign in Page */
document.querySelector('#btnCreate').addEventListener('click',function(){
    document.querySelector('.sign .signin').style.display = 'none'; // hide signin section
    document.querySelector('.sign .signup').style.display = 'block'; // show signup section
});


document.querySelector('#innerSignin').addEventListener('click',function(){
    document.querySelector('.sign .signup').style.display = 'none'; // hide signin section
    document.querySelector('.sign .signin').style.display = 'block'; // show signup section
});