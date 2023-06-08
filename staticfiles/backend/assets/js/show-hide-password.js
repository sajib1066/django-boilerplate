"use strict";

    const eyeBtn = document.querySelectorAll('.password-input i');
    eyeBtn.forEach(function(item){
        item.addEventListener('click', function(e){
            let targetClassList = e.target.classList;
            let inputSiblings = e.target.previousElementSibling;

            if (Object.values(targetClassList).indexOf('la-eye-slash') > -1) {
                targetClassList.remove('la-eye-slash');
                targetClassList.add('la-eye');
                inputSiblings.setAttribute('type', 'password');

            }else{
                targetClassList.remove('la-eye');
                targetClassList.add('la-eye-slash');
                inputSiblings.setAttribute('type', 'text')

            }
        })
    })
