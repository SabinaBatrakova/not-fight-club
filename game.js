const checkboxDefenceZone = document.querySelectorAll('input[name="defence-zone"]');
const input = document.getElementById('player-name');
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
    const zonesCharacter = ['HEAD', 'NECK', 'BODY', 'BELLY', 'LEGS'];
    const defenceChoice = Array.from(document.querySelectorAll('input[name="defence-zone"]:checked')).map(checkbox => zonesCharacter[parseInt(checkbox.value)-1]);

    if (defenceChoice.length !==2) {
        alert('Выберите ровно 2 зоны защиты!');
        return;
    }

    const selectedAttack = document.querySelector('input[name="attack-zone"]:checked');
    const attackChoice = selectedAttack ? zonesCharacter[parseInt(selectedAttack.value)-1] : undefined;

if (!attackChoice) {
      alert('Выберите зону атаки!');
    return;
}

     const characterChoice = {
        attack: attackChoice,
        defence: defenceChoice
    };

    //alert('choice character: ' + JSON.stringify(characterChoice));

    const zones = ['HEAD', 'NECK', 'BODY', 'BELLY', 'LEGS'];
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
        <p>${characterName} attack: ${attackChoice}, defence: ${defenceChoice.join(', ')}. HP => ${totalPointsCharacter}</p>
        <p>Computer attack: ${randomAttack}, defence: ${randomDefence.join(', ')}. HP => ${totalPointsComputer}</p>
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

});



const buttonSaveCharacter = document.querySelector('.button__save-character');
const buttonChoiceCharacter = document.querySelector('.button-choice-character');
const slideCharacterAll =document.querySelectorAll('.character-slide')

let currentIndex = 0;

function hiddenAllCharacter() {
slideCharacterAll.forEach(img =>img.style.display = 'none')
}

function showSlide(index) {
    hiddenAllCharacter()
    slideCharacterAll[index].style.display = 'block';
    currentIndex = index;
}

const savedCharacter = localStorage.getItem('selectedCharacter');
    if (savedCharacter) {
       slideCharacterAll.forEach((slide, index) => {
        if (slide.querySelector('img').src === savedCharacter) {
            showSlide(index);
        }
       })
    } else {
        const randomCharacter = Math.floor(Math.random() * slideCharacterAll.length);
        showSlide(randomCharacter)
}

buttonChoiceCharacter.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * slideCharacterAll.length);
    showSlide(randomIndex);
   
})

buttonSaveCharacter.addEventListener('click', () => {
    const choiceImage = slideCharacterAll[currentIndex].querySelector('img').src;
     localStorage.setItem('selectedCharacter', choiceImage);

     const characterImage = document.querySelector('.game__character-one img');
     if (characterImage) characterImage.src = choiceImage;

     hideAllsections();
    registrationSection.classList.add("hidden");
    beginGame.classList.remove("hidden");
});

window.addEventListener('DOMContentLoaded', () => {
    const savedCharacter = localStorage.getItem('selectedCharacter');
  
    if (savedCharacter) {
        const characterImage =document.querySelector('.game__character-one img');
        if (characterImage) characterImage.src = savedCharacter;
    }
    
})
    


