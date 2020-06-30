function services() {
    document.getElementById("main").innerHTML = `
<div id="services" class="text-center">
  <h2>Services</h2>
  <h4>What we offer</h4>
  <br>
  <div class="row ">
  
    <div class="card-deck ">
          <div class="card mb-2 mx-auto bg-light border-dark">
              
              <div class="card-body"><span class="fas fa-book logo-small"></span>
                  <h4 class="card-title text-center">Bookkeeping</h4>
                  <p class="card-text text-justify">We at Valorega have invested in the state-of-the-art technologies to provide you seamless bookkeeping outsourcing services. The advantage to you involves lowering of administration expenses, reassignment of workforce to concentrate on your primary business pursuits and the certainty that your accounting data is going to be up-to-date and correct.</p>
                  <p class="card-text"><small class="text-muted"></small></p>
              </div>
          </div>
          <div class="card mb-2 mx-auto bg-light border-dark">
            <div class="card-body"><span class="fas fa-hand-holding-usd logo-small"></span>
                <h4 class="card-title text-center">Accounts Payable</h4>
                <p class="card-text text-justify">We have in-depth understanding of the needs of customers in various industries, in addition to extensive experience, and have developed our services based on that. Our accounts payable processing services are cost efficient, flexible, dependable and quick to implement and have been developed through the integration of many technologies.</p>
                <p class="card-text"><small class="text-muted"></small></p>
            </div>
        </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
          <div class="card-body"><span class="fas fa-wallet logo-small"></span>
              <h4 class="card-title text-center">Accounts Recievable</h4>
              <p class="card-text text-justify">Valorega provides accounts receivable outsourcing services that improve collections, along with the company's lifecycle from order to cash. Our accounts receivable implementation is in accordance with the best practices and delivers frequent analysis, automation, reporting, improved communication and flexibility.</p>
              <p class="card-text"><small class="text-muted"></small></p>
          </div>
      </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
              <div class="card-body"><span class="fas fa-file-invoice-dollar logo-small"></span>
                  <h4 class="card-title text-center">Financial Reporting</h4>
                  <p class="card-text text-justify">We make it easier for your external accountants to conduct audits, prepare tax returns for you and to plan your taxes. We can also provide you the full service you require by partnering with audit and tax service providers. We offer the knowledge essential for the survival and growth of your organization through properly presented and accurately prepared management accounts.</p>
                  <p class="card-text"><small class="text-muted"></small></p>
              </div>
          </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
            <div class="card-body"><span class="fas fa-users logo-small"></span>
                <h4 class="card-title text-center">Payroll Processing</h4>
                <p class="card-text text-justify">Valorega specializes in payroll processing services and is a preferred partner for a substantial number of clients. We provide more than 99% accuracy in payroll processing and have a team of highly qualified chartered accountants who focus exclusively on the payroll. We ensure confidentiality completely while providing transparent employee communication, meeting statutory requirements and doing basic payroll calculations, so as to provide end-to-end small business payroll processing.</p>
            </div>
        </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
          <div class="card-body"><span class="fas fa-file-contract logo-small"></span>
              <h4 class="card-title text-center">Tax Preparation</h4>
              <p class="card-text text-justify">Valorega, an ideal tax outsourcing company can help you deal with the difficulties faced at the time of an extremely condensed tax season. Our CPA tax preparation services can improve efficiency and profitability by freeing your firm’s resources to concentrate on higher-value client solutions and attain more desirable work-life balance – triggering superior employee & client satisfaction.</p>
          </div>
      </div>
          
      </div>
  </div>
</div>
`
    var element = document.querySelector("#main");
    element.scrollIntoView()
  }