const checkboxDefenceZone = document.querySelectorAll('input[name="defence-zone"]');
const input =document.getElementById('player-name');
const attackButton = document.querySelector('.button__game-attack');
const gameDescription = document.querySelector('.game-discription')


let totalPointsCharacter = 150;
let totalPointsComputer = 150;

function saveName() {
    const characterName =input.value.trim();

    if (characterName === '') {
        alert("Enter name");
        return;
    }

    localStorage.setItem('player-name', characterName);

    document.querySelectorAll('.name').forEach(item => {
        item.textContent ="Name:" + characterName;
    })
}

checkboxDefenceZone.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
const checked = document.querySelectorAll('input[name="defence-zone"]:checked');
if (checked.length >2) {
    checkbox.checked = false;
    alert('You can chose only 2 defence zone')
}
    })
})

attackButton.addEventListener('click', () => {
    const attackChoice = document.querySelector('input[name="attack-zone"]:checked').value;
    const defenceChoice = Array.from(document.querySelectorAll('input[name="defence-zone"]:checked')).map(checkbox => checkbox.value);

    const characterChoice = {
        attack: attackChoice,
        defence: defenceChoice
    };

    //alert('choice character: ' + JSON.stringify(characterChoice));

    const zones = ['1','2','3','4','5'];
    const randomIndexAttack = Math.floor(Math.random()*zones.length);
    const randomAttack = zones[randomIndexAttack];

    let firstIndexDefence = Math.floor(Math.random()*zones.length);
    let secondIndexDefence ;

    do {
        secondIndexDefence = Math.floor(Math.random()*zones.length);
    } while (secondIndexDefence === firstIndexDefence);

    const randomDefence =[zones[firstIndexDefence], zones[secondIndexDefence]];

    /*alert(
    "Атака компьютера: " + randomAttack + "\n" +
    "Защита компьютера: " + randomDefence.join(", ")*/


// логика такая: если аттака первого игрока совпадает с защитой противника, очки = 0, иначе кто защищается  теряет очки

if (!randomDefence.includes(attackChoice)) {
    totalPointsComputer -=50;
} 

if (!defenceChoice.includes(randomAttack)) {
    totalPointsCharacter -=50;
}

document.querySelector('.character-one-hp').textContent = `${totalPointsCharacter}/150`;
document.querySelector('.character-two-hp').textContent = `${totalPointsComputer}/150`;

const characterName = localStorage.getItem('player-name') || 'Player';
const allGames = `
        <p>${characterName} attack: ${attackChoice}, defence: ${defenceChoice.join(', ')}, HP: ${totalPointsCharacter}</p>
        <p>Computer attack: ${randomAttack}, defence: ${randomDefence.join(', ')}, HP: ${totalPointsComputer}</p>
        <hr>
    `;

    gameDescription.innerHTML += allGames;

  if (totalPointsCharacter <= 0) {
        gameDescription.innerHTML += `<p>Game Over! The computer wins!</p>`;
    } else if (totalPointsComputer <= 0) {
        gameDescription.innerHTML += `<p> Congratulations! You win!</p>`;
    }

console.log("HP игрока:", totalPointsCharacter);
    console.log("HP компьютера:", totalPointsComputer);

})






