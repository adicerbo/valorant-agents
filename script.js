// connecting api
const URL = "https://valorant-api.com/v1/agents";

const $form = $('form');
const $input = $('input[type="text"]');
let $name = $('#name');
let $ability1 = $('#ability1');
let $ability2 = $('#ability2');
let $grenade = $('#grenade');
let $ultimate = $('#ultimate');
let $lore = $('#lore');
let $role = $('#role');
let charImage = $('#charImage')
let $icon1 = $('#icon1')

// let thisData = [];
// let filterResult = [];

// calling data
$.ajax(URL).then(function (data) {
    // console.log(data)
    // thisData = data.data
    // console.log(thisData)
});

// event listener
$form.on('submit', handleGetData);

// function to fetch data
function handleGetData (event) {
    charImage.innerText="";
    event.preventDefault();
    userInput = $input.val();
    if ($input === "") return 
    $.ajax(URL).then(function (data) {
        let charInfo = data.data.find(function(char) {
            return char.displayName === $input.val();
            
        });
        console.log(charInfo);

        // fetch lore
        $lore.text(charInfo.description);

        // fetch role
        $role.text(charInfo.role.displayName);

        // fetch agent name
        $name.text(charInfo.displayName);

        // fetch abilities/descriptions
        // $ability1.append(`<img id = "icon1" src = '${charInfo.abilities[0].displayIcon}'/>`)
        $ability1.text(charInfo.abilities[0].displayName + " - ");
        $ability1.append(charInfo.abilities[0].description);
        $ability2.text(charInfo.abilities[1].displayName + " - ");
        $ability2.append(charInfo.abilities[1].description);
        $grenade.text(charInfo.abilities[2].displayName + " - ");
        $grenade.append(charInfo.abilities[2].description);
        $ultimate.text(charInfo.abilities[3].displayName + " - ");
        $ultimate.append(charInfo.abilities[3].description);
        

        // appending image to page
        $('main').append(`<img id = "charImage" src = '${charInfo.fullPortrait}'/>`)

        

    });
};

// function handleGetData(event) {
//     event.preventDefault()
//     userInput = $input.val()
    // console.log(userInput)
    // filterResult = thisData.filter(checkName) 
    // console.log(filterResult[0].abilities)
    // function checkName(ele) {
    // //    return 1==1
    // return ele.displayName === userInput

    // }
    
// }

//     functions
//     thisData.forEach(function (allData) {
//         // accessing all data
//         // console.log(allData.abilities)
//         let allAbilities = allData.abilities

//         // accessing all abilities for each agent
//         allAbilities.forEach(function (abil) {
//             let abili = abil
//             // console.log(abil)
//         })

//         // accessing all names for agents
//         let allNames = allData.displayName
//         console.log(allNames)

//         // filtering out names
//         // let filteredName = allNames.filter()
//         // console.log(filteredName)


//         // accessing all descriptions for each agent
//         let allDesc = allData.description
//         // console.log(allDesc)

//         // accessing all primary images of agents
//         let allPortraits = allData.fullPortrait
//         // console.log(allPortraits)


//     })


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