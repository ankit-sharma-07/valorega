function services() {
    document.getElementById("main").innerHTML = `
<div id="services" class="text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br>
  <div class="row slideanim">
  
    <div class="card-deck">
          <div class="card mb-2">
              
              <div class="card-body"><span class="fas fa-book logo-small"></span>
                  <h4 class="card-title text-center">Card title</h4>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div class="card mb-2">
              
            <div class="card-body"><span class="fas fa-book logo-small"></span>
                <h4 class="card-title text-center">Card title</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div> <div class="card mb-2">
              
          <div class="card-body"><span class="fas fa-book logo-small"></span>
              <h4 class="card-title text-center">Card title</h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div> <div class="card mb-2">
              
              <div class="card-body"><span class="fas fa-book logo-small"></span>
                  <h4 class="card-title text-center">Card title</h4>
                  <p class="card-text">This  longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div> <div class="card mb-2">
              
            <div class="card-body"><span class="fas fa-book logo-small"></span>
                <h4 class="card-title text-center">Card title</h4>
                <p class="card-text">This is a wider card with supporting text below as a .</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div> <div class="card mb-2">
              
          <div class="card-body"><span class="fas fa-book logo-small"></span>
              <h4 class="card-title text-center">Card title</h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
          
      </div>
  </div>
</div>
`
    var element = document.querySelector("#main");
    element.scrollIntoView()
  }