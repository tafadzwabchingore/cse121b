/* LESSON 3 - Programming Tasks */

/* Profile Object  */

myProfile = {
    name: "Tafadzwa Chingore",
    photo: "images/profile.jpg",
    favoriteFoods: [
        'nhopi', 
        'sweet potatoes', 
        'brown rice', 
        'mutakura', 
        'round nuts', 
        'hodzeko'
    ],
    hobbies: [
        'reading',
        'hiking',
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Musami',
        length: '4 years'
    },

    {
        place: 'Gweru',
        length: '2 years'
    },

    {
        place: 'Mt Plesent',
        length: '1 year'
    }
)


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').imgContent = myProfile.photo;

const person = {
    name: "John Doe"
};
 
assignNameAsAlt("photo", person);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favoriteFoods').appendChild(li)
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li)
});

/* Places Lived DataList */

// Create <dt> element
    const dtElement = document.createElement('dt');
    dtElement.textContent = place;
 
    // Create <dd> element
    const ddElement = document.createElement('dd');
    ddElement.textContent = length;
 
    // Append <dt> and <dd> elements to the <dl> element
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);



