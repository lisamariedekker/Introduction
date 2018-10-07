var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(nextNumber) {
  showDivs(slideIndex += nextNumber);
}

function showDivs(nextNumber) {
  var i;
  var slideList = document.getElementsByClassName("mySlides");
  if (nextNumber > slideList.length) {
    slideIndex = 1
  }
  if (nextNumber < 1) {
    slideIndex = slideList.length
  }
  for (i = 0; i < slideList.length; i++) {
     slideList[i].style.display = "none";
  }
  slideList[slideIndex-1].style.display = "block";
}
