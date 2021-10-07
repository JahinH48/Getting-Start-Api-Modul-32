function Load() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

// 32-4 More data show on website 

function moreData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => display(data));
}

function moreData100() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

function display(data) {
    console.log(data.adderss)
    const ul = document.getElementById('user');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = ` Name : ${user.name}    Email : ${user.email}  Zip : ${user.username}
        `;
        ul.appendChild(li);
    }
}