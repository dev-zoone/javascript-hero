const images = [
    'images/1.jpg',
    'images/a.jpg',
    'images/b.jpg',
    'images/c.jpg',
    'images/d.jpg',
    'images/e.jpg',
    'images/f.jpg',
    'images/g.jpg',
    'images/h.jpg',
    'images/i.jpg',
    'images/j.jpg',
    'images/k.jpg'
]

let imgIndex = 0;
const imgEle = document.getElementById('slider-img');

setInterval( () => {
    if(imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    console.log(imgUrl);
    imgEle.setAttribute('src', imgUrl)
    imgIndex++;
}, 1500)