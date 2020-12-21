var popup_img = document.createElement('div');
popup_img.style.position = 'absolute';
popup_img.id = 'show_img';
var IMG = document.createElement('img');
IMG.id = 'img_id';
IMG.style.width = '300px';
IMG.style.height = '300px';
popup_img.appendChild(IMG);
document.body.appendChild(popup_img);
document.body.addEventListener('mouseover', function(e) {
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.zIndex = '9999';
        images[i].style.position = 'relative';
    }
    if (event.toElement.tagName == 'IMG') {
        var box = event.toElement.getBoundingClientRect();
        var body = document.body;
        document.getElementById('show_img').style.left = box.left + window.pageXOffset + event.toElement.width + 'px';
        document.getElementById('show_img').style.top = box.top + window.pageYOffset - 250 + 'px';
        document.getElementById('img_id').src = event.toElement.src;
        document.getElementById('show_img').style.display = 'block';
        event.toElement.addEventListener('mouseout', function(e) {
            document.getElementById('show_img').style.display = 'none'
        })
    }
}, false);
