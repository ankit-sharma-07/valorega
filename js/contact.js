function contact() {

    document.getElementById("main").innerHTML =`<div id="contact">
    <br><h2 class="text-center">Contact Us</h2><br>
    <div class="row text-center">
      
      <div class="col-lg-3">
        <h3>Address</h3>
        <p>
          611, Tower-A, Solitairian City Center,<br>
          Plot No. 21, Knowledge Park - III,<br>
          Greater Noida - 201306,<br>
          Uttar Pradesh, India</p><br>
          <iframe class="responsive-iframe" src="https://www.google.com/maps/d/u/0/embed?mid=1sjLxFmoPct8dQUQEs9yj_YnZB-sfEMIl&z=15" width="640" height="480" ></iframe>

        <br><br><br>
      </div>
      <div class="col-lg-3">
        
        <h3>Phone No :</h3>
        <p><span class="fas fa-phone"></span> +91 120 232 3669</p><br>
      </div>
      <div class="col-lg-3">          
        <h3>Email Us :</h3>
        <p><span class="fas fa-envelope"></span> info@valoregaresearch.com </p><br>
        
      </div>
      <div class="col-lg-3">
        <div style="background: #061C3D; width:100%; height: 40px;border-radius: 6px;margin-left: 6px;">
          <h4 class="colored" style="color:#fff;padding: 5px 10px 5px 10px;" align="center">Contact Us</h4></div><br>
          <form name="contact" method="POST" data-netlify="true">
          <div class="form-group row">
                      <label for="name" class="col-md-3 col-form-label text-left">Name</label>
                      <div class="col-md-9">
                          <input type="text" class="form-control" id="name" name="name" placeholder="Name">
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="company" class="col-md-3 col-form-label text-left">Company Name</label>
                      <div class="col-md-9">
                          <input type="text" class="form-control" id="company" name="company" placeholder="Company Name">
                      </div>
                  </div>
                  <div class="form-group row">
                    <label for="designation" class="col-md-3  col-form-label text-left">Designation</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="designation" name="designation" placeholder="">
                    </div>
                </div>
                <div class="form-group row">
                  <label for="emailid" class="col-md-3 col-form-label text-left">Email</label>
                  <div class="col-md-9">
                      <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Email">
                  </div>
              </div>
                  <div class="form-group row">
                    <label for="telnum" class="col-12 col-md-3 col-form-label text-left">Contact Tel.</label>
                    <div class="col-5 col-md-3">
                        <input type="tel" class="form-control" id="areacode" name="areacode" placeholder="Area code">
                    </div>
                    <div class="col-7 col-md-6">
                        <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Tel. number">
                    </div>
                </div>
                <div class="form-group row">
                  <label for="message" class="col-md-3 col-form-label text-left">Message</label>
                  <div class="col-md-9">
                      <textarea class="form-control" id="message" name="message" rows="5" placeholder="How may we help ?"></textarea>
                  </div>
              </div>
                <div class="form-group row">
                  <div class="offset-md-3 col-md-10">
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
              </div>
        </form>
      </div>
    </div>
    </div>`
    var element = document.querySelector("#main");
    element.scrollIntoView()
}