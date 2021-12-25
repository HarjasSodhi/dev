let input = document.querySelector('#inp');
let ul = document.querySelector('#list');

input.addEventListener("keypress", function (e) {
    if (e.code == 'Enter' && e.currentTarget.value.trim() != "") {
        let task = e.currentTarget.value;
        let li = document.createElement('li');
        li.innerText = task;
        li.addEventListener('dblclick', function (li) {
            li.currentTarget.remove();
        })
        ul.append(li);
        e.currentTarget.value = "";
    }
});