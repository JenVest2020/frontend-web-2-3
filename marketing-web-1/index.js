const photoImages1 = document.querySelector('.photo1');
const photoImages2 = document.querySelector('.photo2');
const photoImages3 = document.querySelector('.photo3');





console.log(photoImages1)

photoImages1.addEventListener('mouseenter', () =>{
    photoImages1.style.transform = "scale(1.2)";
    photoImages1.style.transition = "all 0.3s"
})
photoImages1.addEventListener('mouseleave', () =>{
    photoImages1.style.transform = "scale(1.0)";
});


photoImages2.addEventListener('mouseenter', () =>{
    photoImages2.style.transform = "scale(1.2)";
    photoImages2.style.transition = "all 0.3s"
})
photoImages2.addEventListener('mouseleave', () =>{
    photoImages2.style.transform = "scale(1.0)";
});


photoImages3.addEventListener('mouseenter', () =>{
    photoImages3.style.transform = "scale(1.2)";
    photoImages3.style.transition = "all 0.3s"
})
photoImages3.addEventListener('mouseleave', () =>{
    photoImages3.style.transform = "scale(1.0)";
});