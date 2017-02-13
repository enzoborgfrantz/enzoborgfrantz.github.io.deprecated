require('es6-promise').polyfill();
require('isomorphic-fetch');

export default getSkillsFromLinkedin() {
    fetch('https://api.linkedin.com/v1/people/~:(skills)?format=json&name=enzo%20borg%20frantz')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log(data);
      })
}
