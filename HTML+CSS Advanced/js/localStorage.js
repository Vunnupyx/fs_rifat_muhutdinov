function persistInput(id) {
    let input = document.getElementById(id)
    let key = "input-" + input.id;

    let storedValue = localStorage.getItem(key);

    if (storedValue)
        input.value = storedValue;

    input.addEventListener('input', function () {
        localStorage.setItem(key, input.value);
    });
}


persistInput('contactFName');
persistInput('contactSName');
persistInput('contactEmail');
persistInput('contactPhone');
persistInput('contactMessage');
