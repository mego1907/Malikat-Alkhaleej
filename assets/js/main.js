document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector('.signin .create-acc').addEventListener('click',function(){
        document.querySelector('.sign .signin').style.display = 'none';
        document.querySelector('.sign .signup').style.display = 'block';
        })



    // cart
    const productLists = document.querySelectorAll('.shop .products-list ul li');
    const catorgy = document.querySelectorAll('.shop .products-items .catorgy');
    
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
})