(function(window, document){

    'use strict';

    let optionList = document.querySelector('.select-edition');
    const button = document.querySelector('.btn');
    const spotify = document.querySelector('.spotify-iframe');
    const spotifyContainer = document.querySelector('.spotify');
    const main = document.querySelector('.page-content');

    //Data for image, spotifyUrl, text and value
    const edition = [
        {
            image: 'images/radio01-large.jpeg',
            imageSquare: 'images/radio01-square.jpeg',
            spotifyUrl: '1FDcVNegRpCpmnwCKZv4So',
            text: '#01',
            value: '01',
        },
        {
            image: 'images/radio02-large.jpeg',
            imageSquare: 'images/radio02-square.jpeg',
            spotifyUrl: '75s7vmSDTLXl65qS1JcMYl',
            text: '#02',
            value: '02',
        },
        {
            image: 'images/radio03-large.jpeg',
            imageSquare: 'images/radio03-square.jpeg',
            spotifyUrl: '2ar6C8K8vcse7voV7Y7A6W',
            text: '#03',
            value: '03',
        },
    ]

    //Store the data to create a new option, with a function that passes 'text' and 'value' properties to new objects in this array 
    let optionStorage = edition.map((option) => {
        let result = {
            'text': option.text,
            'value': option.value,
            'selected': option.selected
        }
        return result;
    })

    //function to define the background color for the main container.   
    const getBackgroundColor = (value) => {
        main.style.backgroundImage = main.width > 833 ? `url('${edition[value].image}')` : `url('${edition[value].imageSquare}')`;
    }

    //function that attibrutes the link to the spotify iframe
    const getSpotifyUrl = (value) => {
        return spotify.src = `https://open.spotify.com/embed/playlist/${edition[value].spotifyUrl}}`
    } 
    
    //declaration of function to define the first image and spotify to appear
    
    getBackgroundColor(edition.length - 1);
    getSpotifyUrl(edition.length - 1);
    
    //Function that changes the display of the spotify player
    let isPressed = false;

    button.addEventListener('click', () => {
        
        isPressed = !isPressed;
        if (isPressed) {
            button.innerText = 'HIDE PLAYER';
            spotifyContainer.style.display = 'block';
        } else {
            button.innerText = 'SHOW PLAYER';
            spotifyContainer.style.display = 'none';
        }
    });  
    
    //Function which returns html as children to select element (option)
   
    optionStorage.forEach(option => {
        let opt = new Option (option.text, option.value, option.selected);
        opt.className = 'option';        
        
        optionList.add(opt);
    });

    //declaring the option DOM element
    
    let options = document.querySelectorAll('.option');

    //Calling a eventlistener to select one of the options and use the 'value' parameter to set the function that will change the dom

    const getContainerNumber = function(){
        options.forEach((option, index) => {
            if (options[index].selected) {
                getBackgroundColor(options[index].value - 1);
                getSpotifyUrl(options[index].value - 1);
            } else {
                '';
            }
        });
    }
    
    optionList.addEventListener('change', getContainerNumber);


})(window, document);