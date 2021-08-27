function dataLoad() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function userLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayLoad(data))
}

function postLoad() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))

}

function displayPost(data) {
    const ul = document.getElementById('post')
    for (const post of data) {
        const li = document.createElement('li');
        li.innerText = post.id;
        ul.appendChild(li);
    }
}

function displayLoad(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }

}

function commentLoad() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}

function displayComment(data) {
    const ul = document.getElementById('comment');
    for (const comment of data) {
        const li = document.createElement('li');
        li.innerText = comment.name;
        ul.appendChild(li);
    }

}