const URL = "https://valorant-api.com/v1/agents"

const $form = $('form')
const $input = $('input [type = "text"]')


// event listener
$form.on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()

    $.ajax(URL).then(function (data) {
        // console.log(data)
        let thisData = data.data
        // console.log(thisData)


        thisData.forEach(function (allData) {
            // accessing all data
            // console.log(allData.abilities)
            let allAbilities = allData.abilities

            // accessing all abilities for each agent
            allAbilities.forEach(function (abil) {
                let abili = abil
                // console.log(abil)
            })

            // accessing all names for agents
            let allNames = allData.displayName
            console.log(allNames)

            // filtering out names
            // let filteredName = allNames.filter()
            // console.log(filteredName)

            // accessing all descriptions for each agent
            let allDesc = allData.description
            // console.log(allDesc)

            // accessing all primary images of agents
            let allPortraits = allData.fullPortrait
            // console.log(allPortraits)


        })


    })

}

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