const videoSrc = document.querySelector("#videoContainer");
const inputTags = document.querySelector("#videoUpload");
const videoTag = document.querySelector("#video-tag");


inputTags.addEventListener("change", readVideo);
function readVideo(event) {
    console.log(event.target.files)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        console.log('loaded')
        videoSrc.src = e.target.result
        videoTag.load()
      }.bind(this)
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }




