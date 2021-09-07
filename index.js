const searchInput = document.querySelector('#search-input');
const btnSearch = document.querySelector('#btn-search');
const userInfo = document.querySelector('.user-info');



//render user 
const renderUser = (info) => {
    //console.log(info.message);

    let joined = info.created_at.slice(0, 10);

    //console.log(joined);
    userInfo.innerHTML = `
    <div class="info">
    <div class="header">
    <div class="image">
     <img src=${info.avatar_url}>
    </div >
    <div class="name">
        <h2 id="name-info">${info.name}</h2>
        <p id="username">${info.login}</p>
        <span id="joined">Joined - ${joined}</span>
    </div>
</div >
<div class="bio">
    <p id="bio-info">${info.bio}</p>
</div>
<div class="other-info">
    <div class="Repos">
        <h4>REPO</h4>
        <p id="repo">${info.public_repos}</p>
    </div>
    <div class="followers">
        <h4>FOLLOWER's</h4>
        <p id="followers">${info.followers}</p>
    </div>
    <div class="following">
        <h4>FOLLOWING</h4>
        <p id="following">${info.following}</p>
    </div>
</div>
<div class="location">
    <p class="location-info">${info.location}</p>
</div>
</div>
`
}


const getUsers = () => {
    userInfo.innerHTML = '<p class="loading">Loading...</p>';
    const username = searchInput.value;
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            userInfo.innerHTML = `<p class="error"> User ${result.message}</p>`;
            renderUser(result);
        })
        .catch(error => {
            console.log(error);
        })
    searchInput.value = "";
}




btnSearch.addEventListener('click', getUsers)