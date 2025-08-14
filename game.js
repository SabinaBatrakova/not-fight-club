const checkboxDefenceZone = document.querySelectorAll('input[name="defence-zone"]');
const input =document.getElementById('player-name');


function saveName() {
    const characterName =input.value.trim();

    if (input === '') {
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

