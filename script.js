const url = "https://valorant-api.com/v1/agents"

$.ajax(url).then(function(data) {
    console.log(data)
})

const $name = $(data.displayName)
const $description = $('#description')
const $portrait = $('#fullPortrait')
const $role = $('#displayName')
console.log($name)


// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')