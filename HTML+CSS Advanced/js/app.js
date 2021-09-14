let inpPhone = document.getElementById('contactPhone');

inpPhone.addEventListener('focus', _ => {
    if (!/^\+\d*$/.test(inpPhone.value) && !inpPhone.value)
        inpPhone.value = '+7 ';
});

inpPhone.addEventListener('keypress', e => {
    if (!/\d/.test(e.key))
        e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    let name;
    const form = document.getElementById('form-contact')
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let flag = getCookie('flag')
        if (!eval(flag)) {
            let error = formValidate()
            name = `${document.getElementById('contactFName').value} ${document.getElementById('contactSName').value}`
            let formData = new FormData(form);
            if (error === 0) {
                let response = await fetch('tralala', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok || true) {
                    document.cookie = 'flag=true;';
                    document.cookie = `name=${name};`;
                    alert(`${name}, спасибо за обращение!`)
                    let result = await response.json();
                    form.reset();
                } else {
                    console.log('ошибка fetch')
                }
            } else {
                alert('Заполните обязательные поля')
            }
        } else
            alert(`${name}, ваше обращение обрабатывается!`)
    }

    function isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);
    }

    function isValidPhone(phone) {
        return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll('.contact__field')

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            inputRemoveError(input);

            if (input.classList.contains('_name')) {
                if (input.value.length < 3) {
                    inputAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_email')) {
                if (!isValidEmail(input.value)) {
                    inputAddError(input);
                    error++;
                }

            } else if (input.classList.contains('_mobile')) {
                if (!isValidPhone(input.value)) {
                    inputAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    inputAddError(input)
                    error++;
                }
            }
        }
        return error;
    }

    function inputAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }

    function inputRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }
});

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}