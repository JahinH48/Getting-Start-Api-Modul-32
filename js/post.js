function callingPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => display(data))
}
// callingPost()

function display(data) {
    const postContainer = document.getElementById('post')
    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2> ${post.title}</h2>
        <p> ${post.body}</p>
        `;
        postContainer.appendChild(div);
        // console.log(post.title)
    }
}