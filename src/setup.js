(function(window, document){

    'use strict';

    //DOM Element
    let optionList = document.querySelector('.select-edition');
    const button = document.querySelector('.svg');
    const spotify = document.querySelector('.spotify-iframe');
    const spotifyContainer = document.querySelector('.spotify');
    const main = document.querySelector('.page-content');
    const width = window.innerWidth;

    //Data for image, spotifyUrl, text and value
    const data = [
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
    let optionStorage = data.map((option) => {
        let result = {
            'text': option.text,
            'value': option.value,
            'selected': option.selected
        }
        return result;
    })

    //Function which returns html as an option to select

    optionStorage.forEach(option => {
        let opt = new Option (option.text, option.value, option.selected);
        opt.className = 'option';        
        
        optionList.add(opt);
    });
    
    //Options DOM Element

    let options = document.querySelectorAll('.option');


    //function to define the background color for the main container.   
    const getBackgroundColor = (value) => {
        main.style.backgroundImage = main.width > 833 ? `url('${data[value].image}')` : `url('${data[value].imageSquare}')`;
    }

    //function that attibrutes the link to the spotify iframe
    const getSpotifyUrl = (value) => {
        return spotify.src = `https://open.spotify.com/embed/playlist/${data[value].spotifyUrl}}`
    }
    
    //Change the display from spotify as the width changes, but we have to do the function call the same way to catch first access page width

    const showSpotifyOnMobile = () => {
        width > 933 ? spotifyContainer.style.display = 'none' : spotifyContainer.style.display = 'block';
    }

    //declaration of function to define the first image and spotify to appear
    
    showSpotifyOnMobile();
    getBackgroundColor(data.length - 1);
    getSpotifyUrl(data.length - 1);
    
    //Function that changes the display of the spotify player
    let isPressed = false;

    button.addEventListener('click', () => {
        
        isPressed = !isPressed;
        if (isPressed) {
            button.children[0].href.baseVal = `./src/bootstrap-icons.svg#chevron-down`
            spotifyContainer.style.display = 'block';
        } else {
            button.children[0].href.baseVal = `./src/bootstrap-icons.svg#chevron-up`
            spotifyContainer.style.display = 'none';
        }
    });  
    
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
    width.addEventListener('change', showSpotifyOnMobile);


})(window, document);