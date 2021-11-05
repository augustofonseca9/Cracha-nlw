const LinksSocialMedia = {
  github: 'augustofonseca9',
  youtube: 'channel/UCSl7JRPDY084KITCWhC3JLg',
  facebook: 'augusto.fonseca.58',
  instagram: 'augusto_fonsecaa',
  linkedin: 'in/augusto-teixeira-933480130'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
// i = i + 1
// i++

// ser humano 12345678910
// computador 0123456789

// ctrl+k+c - comentario
// ctrl+k+u - tira comentario

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userimage.src = data.avatar_url
      userlogin.textContent = data.login
    })
}
getGitHubProfileInfos()
