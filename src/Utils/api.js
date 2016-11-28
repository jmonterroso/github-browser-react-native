var api = {

  getBio(username) {
    username = username.toLowerCase().trim();
    console.log('username', username);
    var url = `https://api.github.com/users/${username}`;
    console.log('url', url);
    return fetch(url).then((res) => res.json());

  },

  getRepos(username) {
    username = username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());

  },
};

module.exports = api;
