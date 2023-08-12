function showImage(imageId) {
  var images = document.querySelectorAll(".image-display img");
  images.forEach(function(img) {
    img.style.display = "none";
  });
  document.getElementById(imageId).style.display = "block";
}
