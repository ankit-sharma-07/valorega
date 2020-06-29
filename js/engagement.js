function engagement() {
    document.getElementById("main").innerHTML = `
<div id="engagement" class="text-justify">
      <h2>Engagement Models</h2><br>
      <h4><strong>One-to-One Model</strong></h4><br> 
      <p>In the One-to-One model, our analysts will be mapped to particular analysts at client end and will work only for that client which benefits our clients as the learning curve for our analysts will be steep in this model. This engagement model is suitable for clients, who have a mix of ongoing and ad-hoc research requirements.</p><br>
      
      <h4><strong>Spoke-Hub Model</strong></h4><br>
      <p>In the Spoke-Hub model, we assign one relationship manager to our client, who receives all research requests from our clients and determines the skill set required for the research project and allocates the work to the most suitable analyst or team of analysts. Our relationship manager will be the one point of contact for all client interactions and will be responsible for quality of deliverable. This engagement model is beneficial for the clients who need resources with various skills set for different research requirements at no extra cost.</p><br>
     
      <h4><strong>Ad-hoc Model</strong><br></h4> 
      <p>We also provide our research services on ad-hoc basis in which research requirements for each project differs. This engagement model is beneficial for the clients who have urgent but one off or low frequency research requirements and do not want to incur sustained costs for these requirements.</p><br>
      <h4><strong>Apart from above mentioned engagement models, we can also work out other suitable engagement models as per client requirements, if needed.
      </strong>
      </h4>
    </div>`
    var element = document.querySelector("#main");
    element.scrollIntoView()
  }
