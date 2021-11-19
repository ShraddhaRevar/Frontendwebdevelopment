// URL to Game of Thrones API to fetch all characters
const url = 'https://thronesapi.com/api/v2/Characters';

const app = document.querySelector('#characters');

const addCharactertoDOM = (character) => {

    let element = document.createElement('div');
    let fName = document.createElement('div');
    let title = document.createElement('div');
    let image = document.createElement('div');

    fName.textContent = character.firstName;
    title.textContent = character.title;
    image.textContent = character.image;

    element.append(fName);
    element.append(title);
    element.append(image);

    app.append(element);

}

const fetchData = (url) => {

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            data.forEach((character) => {
                console.log(character.fullName, 
                            character.title, 
                            character.image,
                            character.imageUrl,
                            );
                            addCharactertoDOM(character);
            });
        })

        .catch((error) => console.error(error));
};

fetchData(url);