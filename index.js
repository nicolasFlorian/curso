document.addEventListener('DOMContentLoaded', () => {
    let username = prompt('Digite seu username (@) do GitHub: ');
    if(username != null) {
        if(username != null) {
            if(username.charAt(0) === '@') {
                username = username.slice(1);
            }
            getUser(username);
        }
    }
})

const elements = {
    name: document.querySelector('#name'),
    user: document.querySelector('#username'),
    avatar: document.querySelector('#avatar'),
    repos: document.querySelector('#repos'),
    followers: document.querySelector('#followers'),
    following: document.querySelector('#following'),
    link: document.querySelector('#link'),
}



function getUser(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Usuário não encontrado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        elements.name.textContent = data.name;
        elements.user.textContent = data.login;
        elements.avatar.src = data.avatar_url;
        elements.repos.textContent = data.public_repos;
        elements.followers.textContent = data.followers;
        elements.following.textContent = data.following;
        elements.link.href = data.html_url;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}