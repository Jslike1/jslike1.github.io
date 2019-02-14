var counter = 2;

function update() {
    var image = document.querySelector('#image');
    var text = document.querySelector('#text');
    if(counter <= 5)
    {
        image.src = '../' + counter + '.jpg';
    }

    switch(counter)
    {
        case 2:
        text.innerHTML = 'Thank You...'
        break;

        case 3:
        text.innerHTML = '...for all...'
        break;

        case 4:
        text.innerHTML = 'the memories!'
        break;

        default:
        text.innerHTML = 'Happy Valentine`s Day. I love you!'
        break; 

    }

    counter++;
}