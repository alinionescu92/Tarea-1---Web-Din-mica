const IMG_INITIAL = "public/image1.JPG";
const SECOND_IMG = "public/image2.JPG";
const THIRD_IMG = "public/image3.JPG";
const FOURTH_IMG = "public/image4.JPG";
let randomImage = ([IMG_INITIAL, SECOND_IMG, THIRD_IMG, FOURTH_IMG]);
function changeImage(){
    let random = Math.floor(Math.random()*randomImage.length);
    document.getElementById("firstImage").src = randomImage[random];
}
document.getElementById("firstImage").addEventListener("click", changeImage);