const URL = "https://valorant-api.com/v1/agents"

$.ajax(URL).then(function(data) {
    console.log(data)
    let thisData = data.data
    console.log(thisData)


    thisData.forEach(function(allData) {
        // accessing all data
        // console.log(allData.abilities)
        let allAbilities = allData.abilities
        
        // accessing all abilities for each agent
        allAbilities.forEach(function(abil) {
            let abili = abil
            // console.log(abil)
        })

        // accessing each name for agents
        let allNames = allData.displayName
        console.log(allNames)
        
    })
})

// const showAgent = (data) => {
//     data.
// }



// const $name = $('#displayName')

// $.ajax({
//     url: "https://valorant-api.com/v1/agents"
// })
// .then(
//     (data) => {
//         $name.text(data.displayName)
//     }
// )

// console.log($name)

// const $description = $('#description')
// const $portrait = $('#fullPortrait')
// const $role = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $name = $('#displayName')
// const $input = $('input[type = "text"]')