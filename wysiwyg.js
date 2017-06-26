// Create an array of objects that represents famous people (see structure below).
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
// Sample Person Element & Children

function createCard(person){
    let personHeader = document.createElement("header");
    let personSection = document.createElement("section");
    let personFooter = document.createElement("footer");
    let headerText = `${person.name} - ${person.title}`
    console.log(headerText);
}

let famousPeople = [
    {
      title: "Samurai",
      name: "Tomoe Gozen",
      bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
      lifespan: {
        birth: 1747,
        death: 1797
      }
    }

    {
      title: "U.S. President",
      name: "Theodore Roosevelt",
      bio: "Theodore Roosevelt was an American statesman, author, explorer, soldier, naturalist, and reformer who served as the 26th President of the United States from 1901 to 1909.",
      image: "https://en.wikipedia.org/wiki/File:President_Roosevelt_-_Pach_Bros.tif",
      lifespan: {
        birth: 1858,
        death: 1919
      }
    }

    {
      title: "General of the Army",
      name: "Douglas MacArthur",
      bio: "Douglas MacArthur  was an American five-star general and field marshal of the Philippine Army. He was Chief of Staff of the United States Army during the 1930s and played a prominent role in the Pacific theater during World War II.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/92/MacArthur_Manila.jpg",
      lifespan: {
        birth: 1880,
        death: 1964
      }
    }
];

