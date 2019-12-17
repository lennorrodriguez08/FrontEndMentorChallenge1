document.addEventListener('DOMContentLoaded', function() {

    var stateBtn1 = document.querySelector('.state-btn-1');
    var pBox1 = document.querySelector('.p-box-1');
    var pBox2 = document.querySelector('.p-box-2');
    var pBox3 = document.querySelector('.p-box-3');
    stateBtn1.addEventListener('click', toggleBtn);
    function toggleBtn(e) {
//        console.log(e);
//        console.log(e.target);
        if (e.target.className == 'state-btn-1') {
            stateBtn1.style.transform = 'translateX(-21px)';
            stateBtn1.className = 'state-btn-2'
            pBox1.textContent = '199.99';
            pBox2.textContent = '249.99';
            pBox3.textContent = '399.99';
        }
        else if (e.target.classList == 'state-btn-2') {
            stateBtn1.className = 'state-btn-1';
            pBox1.textContent = '19.99';
            pBox2.textContent = '24.99';
            pBox3.textContent = '39.99';
            stateBtn1.style.transform = 'translateX(0px)';
        } 
    }
    
})