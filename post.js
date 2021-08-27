function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => allPost(data))
}
loadPost();

function allPost(data) {
    const postContainer = document.getElementById('post');
    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h2>New Title: ${post.title}</h2>
            <p>Comment: ${post.body}</p>
        `
            // li.innerText = post.title;
        postContainer.appendChild(div);
    }
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
const converted = JSON.parse(stuInfo);
console.log(converted.name);

const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }
const { brand } = premikas.cars;
console.log(brand)

// crud operations.