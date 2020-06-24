function management() {
    document.getElementById("main").innerHTML = `
  
  <div id="management" >
    <h2>Managing Partner</h2><br>
    <div class="row">
      <div class="col-sm-3">
        <img src="./images/krishna_dev.jpg"/>
      </div>
      <div class="col-sm-9 text-justify">
        <h4><strong>Krishna Dev, CFA, FRM</strong></h4> <br>
        <p>At VRAL, Krishna is responsible to provide strategic leadership, drive growth, ensure high levels of customer service excellence and spearhead research & analytics team. Prior to VRAL, he has over 11 years of investment research experience in global markets in equity research and investment banking domain. In his career, he has provided an array of equity research, business valuation, management consultancy, and financial advisory services. He worked with some of the world's largest financial research services provider where he served various clients comprising well-known sell-side firms (including bulge bracket investment banks) as well as buy-side firms. Some of his most successful bets in Indian markets were PVR Ltd., Page Industries Ltd., Jubilant Foodworks Ltd., Cinemax India Ltd. (acquired by PVR), and Titan Company Ltd.
        He is a CFA Charter holder, FRM Charter holder and holds MBA (Finance) degree.</p>
      </div>
    </div>`
    var element = document.querySelector("#main");
    element.scrollIntoView()
  }