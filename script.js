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
        $role.text(charInfo.role.displayName + " - ");
        $role.append(charInfo.role.description);

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
