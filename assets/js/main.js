/* Sign In User Section */
function showSignIn() {
    const signUser = document.querySelector('.sign-user');
    const crAcc = document.querySelector('.cr-acc');
    const closeBtn = document.querySelectorAll('.sign-user .close-btn');
    const backSignIn = document.querySelector('.back-signin')
    signUser.style.display = 'block';
    crAcc.addEventListener('click', () => {
        signUser.children[0].style.display = 'none'
        signUser.children[1].style.display = 'block'
    })
    
    backSignIn.addEventListener('click', () => {
        signUser.children[1].style.display = 'none'
        signUser.children[0].style.display = 'block'
    })
    
    for(let i = 0; i < closeBtn.length; i++) {
        closeBtn[i].addEventListener('click', () => {
            signUser.style.display = 'none'
        })
    }
}




// Navbar
const navLink = document.querySelectorAll('.nav-item .nav-link'); // Navbar Link

for(let i =0; i < navLink.length; i++) {
    // Add Active Class When I Click On NavLink 
    navLink[i].addEventListener('click', ()=> {
        navLink.forEach((e)=> e.classList.remove('active')) // Remove Active
        navLink[i].classList.add('active'); // Add Active
    })
}

// Add Class 'added' in cart when i click the button 'add To Cart'
const cart = document.querySelectorAll('.cart');
for(let i = 0; i < cart.length; i++){
    const addToCartBtn = cart[i].children[1].children[2]; // Add To Cart Button
    const viewCart = cart[i].children[1].children[3]
    addToCartBtn.addEventListener('click', ()=> {
        showSignIn()
        addToCartBtn.innerHTML = `Added <i class="fa fa-check"></i>`
        addToCartBtn.classList.add('added-btn');
        viewCart.classList.add('added-view');
        cart[i].classList.add('added');
    })
}


// cart
/* const productLists = document.querySelectorAll('.shop .products-list ul li'); // List Item
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
} */

// increase and decrease The Price Count 
let controlQuntity = document.querySelectorAll('.control-quntity')

for(let i = 0; i < controlQuntity.length; i++) {
    const increase = controlQuntity[i].children[0]
    let input = controlQuntity[i].children[1];
    const decrease = controlQuntity[i].children[2]
    increase.addEventListener('click', () => {
        input.value++
    })
    decrease.addEventListener('click', () => {
        input.value--
        if(input.value < 1) {
            input.value = 1;
        }
    })
}

// Remove Cart Item Button
const removeBtn = document.getElementsByClassName('close')
for(let i =0; i < removeBtn.length; i++) {
    const button = removeBtn[i];
    button.addEventListener('click', function(event) {
        const btnClicked = event.target
        btnClicked.parentElement.parentElement.remove()
    })
}


// Counter in About Page
let counter = document.querySelectorAll('.user-banner .col-md-3 .counter p');
const userBanner = document.querySelector('#userBanner');



document.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop >= userBanner.offsetTop - 200){
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
const btnCreate = document.querySelector('.create-acc');
btnCreate.addEventListener('click',function(){
    document.querySelector('.sign .signin').style.display = 'none'; // hide signin section
    document.querySelector('.sign .signup').style.display = 'block'; // show signup section
});


document.querySelector('#innerSignin').addEventListener('click',function(){
    document.querySelector('.sign .signup').style.display = 'none'; // hide signin section
    document.querySelector('.sign .signin').style.display = 'block'; // show signup section
});