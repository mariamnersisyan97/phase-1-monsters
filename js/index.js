const monsterContainer = document.getElementById('monster-container');
fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(resp=> resp.json())
    .then(response => {
        response.forEach(monster => {

        const card = document.createElement("div");
        const name = document.createElement("h4")
        const age = document.createElement("h1");
        const description = document.createElement("p");
        name.innerText = monster.name
        age.innerText = monster.age
        description.innerText = monster.description
        
        card.append(name, age, description);
        monsterContainer.append(card)

        })
     })
