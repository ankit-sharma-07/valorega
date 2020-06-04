function contact() {

    document.getElementById("main").innerHTML =`<div id="contact">
    <br><h2 class="text-left">CONTACT</h2>
    <div class="row">
      
      <div class="col-sm-3">
        <h3>Address</h3>
        <p>
          611, Tower-A, IT Square,<br>
          Plot No. 21, Knowledge Park - III,<br>
          Greater Noida - 201306,<br>
          Uttar Pradesh, India</p><br>
          <iframe class="responsive-iframe" src="https://www.google.com/maps/d/u/0/embed?mid=1sjLxFmoPct8dQUQEs9yj_YnZB-sfEMIl&z=15" width="640" height="480" ></iframe>

        <br><br><br>
      </div>
      <div class="col-sm-3">
        
        <h3>Phone No :</h3>
        <p><span class="fas fa-phone"></span> +91 120 232 3669</p>
      </div>
      <div class="col-sm-3">          
        <h3>Email Us :</h3>
        <p><span class="fas fa-envelope"></span> info@valoregaresearch.com </p>
        <p><span class="fas fa-envelope"></span> valoregaresearch@gmail.com</p>
      </div>
      <div class="col-sm-3">
        <div style="background: #061C3D; width:100%; height: 40px;border-radius: 6px;margin-left: 6px;">
          <h4 class="colored" style="color:#fff;padding: 5px 10px 5px 10px;" align="center">Contact Us</h4></div><br>
        <form name="contact" method="POST" data-netlify="true">
          <table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
            <tr>
              <td width="170" align="left" valign="middle" >Name :<strong>*</strong></td>
              <td colspan="2" align="left" valign="middle"><input size="25" name="name" value="" class="boxes" type="text" /></td>
              </tr>
            <tr><td height="5" colspan="3" align="left" valign="middle"></td>
            </tr>
            <tr>
              <td width="79" align="left" valign="middle">Company Name :<strong></strong></td>
              <td colspan="2" align="left" valign="middle"><input size="25" name="company" value="" class="boxes" type="text" /></td>
              </tr>
            <tr><td height="5" colspan="3" align="left" valign="middle"></td>
            </tr>
            <tr>
              <td width="79" align="left" valign="middle">Designation :<strong></strong></td>
              <td colspan="2" align="left" valign="middle"><input size="25" name="designation" value="" class="boxes" type="text" /></td>
              </tr>
            <tr><td height="5" colspan="3" align="left" valign="middle"></td>
            </tr>
            
            <tr>
              <td width="79" align="left" valign="middle">Email Id :<strong>*</strong></td>
              <td colspan="2" align="left" valign="middle"><input size="25" name="email" value="" class="boxes" type="text" /></td>
              </tr>
            <tr><td height="5" colspan="3" align="left" valign="middle"></td>
            </tr>
            <tr>
              <td width="79" align="left" valign="middle">Mob No :<strong>*</strong></td>
              <td colspan="2" align="left" valign="middle"><input size="25" name="phone" value="" class="boxes" type="text" /></td>
              </tr>
            <tr>
              <td height="5" colspan="3" align="left" valign="middle"></td>
            </tr>
            
             </tr>
            
            <tr>
              <td align="left" valign="middle">Message :*</strong><br />
                <br /><br /><br /></td>
              <td colspan="2"  align="left" valign="top"><textarea name="query" cols="18" rows="4" placeholder="How can we help?" style="width:173px; background-color:#fff; border:#A6ABAF 1px solid; color:#aaa;"></textarea> </td>
              </tr>
              <tr>
                <td align="left" valign="middle" height="5"></td>
                <td width="56" align="left" style="padding-top:10px;"><label> <input type="submit" name="Submit" value="Submit" alt="Submit Form" />
                </label></td>
              </tr>
          </table>
        </form>

      </div>
    </div>
    
    </div>`
    var element = document.querySelector("#main");
    element.scrollIntoView()
}