function gallery() {

    document.getElementById("main").innerHTML = `<div id="gallery" class="text-center ">
  <h2>Gallery</h2><br>
  <h4>Workspace</h4>
  <div class="row text-center slideanim">
    <div class="col-sm-6">
      <div class="thumbnail">
        <img src="./images/front.jpg" alt="img not available">
        <p><strong>Front</strong></p>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="thumbnail">
        <img src="./images/corridor.jpg" alt="img not available">
        <p><strong>Corridor</strong></p>
      </div>
    </div>
  </div><br>
</div>`
    var element = document.querySelector("#myPage");
    element.scrollIntoView()
  }
