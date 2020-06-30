function industries() {
    document.getElementById("main").innerHTML = `
<div id="industries" class="text-center">
  <h2>Industries</h2>
  <h4>Whom we serve</h4>
  <br>
  <div class="row ">
    <div class="card-deck">
          <div class="card mb-2 mx-auto bg-light border-dark">
              
              <div class="card-body"><span class="fas fa-shipping-fast logo-small"></span>
                  <h4 class="card-title text-center">E-Commerce</h4>
                  <p class="card-text text-justify">
                  Our e-Commerce accounting services help to maintain the day to day accounting operations for your business along with maintain perfect records. Our accountants ensure your books are kept to order, and all income, expenses, liabilities, assets, and equity transactions are recorded and double-checked for continuity. Our accounting schedule works around the time set by you, and is completely governed by your needs.</p>
              </div>
          </div>
          <div class="card mb-2 mx-auto bg-light border-dark">
              
            <div class="card-body"><span class="fas fa-shopping-cart logo-small"></span>
                <h4 class="card-title text-center">Retail</h4>
                <p class="card-text text-justify">
                The retail industry is constantly influenced by rapid changes in the economy, as well as the periodic variations and the spending patterns of consumers. With our expert Accounting and Bookkeeping services, financial cash flow management systems, and sensible budgeting, your business can remain profitable during the slow seasons. </p>
            </div>
        </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
          <div class="card-body"><span class="fas fa-industry logo-small"></span>
              <h4 class="card-title text-center">Manufacturing</h4>
              <p class="card-text text-justify">Our CPAs, business advisors, and bookkeepers can help you keep track of your finances while providing you with daily or weekly reports about your financial performance. With our help you will also be able to make allocations for actual and budgeted operations costs, spare products, etc</p>
          </div>
      </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
              <div class="card-body"><span class="fas fa-building logo-small"></span>
                  <h4 class="card-title text-center">Real Estate</h4>
                  <p class="card-text text-justify">Bookkeeping and accounting are the most crucial but time-consuming tasks for any industry. We have a team of financial experts, accountants, CPAs, and bookkeepers to help our Real Estate clients with customized accounting solutions.</p>
              </div>
          </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
            <div class="card-body"><span class="fas fa-video logo-small"></span>
                <h4 class="card-title text-center">Media and Entertainment</h4>
                <p class="card-text text-justify">Media and entertainment organizations are gradually seeing the impact of new global revenue standards on their accounting and bookkeeping practices, contracts, financial statements, and company policies. At Valorega, we aim to enable our clients to strive harder and do more by taking care of their profit streams, and keeping their books in order. Our services are ideal for global media and entertainment outlets looking for a single service provider to streamline their existing accounts. </p>
            </div>
        </div> <div class="card mb-2 mx-auto bg-light border-dark">
              
          <div class="card-body"><span class="fas fa-user-md logo-small"></span>
              <h4 class="card-title text-center">Healthcare</h4>
              <p class="card-text text-justify">By outsourcing your accounting and bookkeeping needs to us, you can reduce operational costs while saving time and focusing on the core aspects of our healthcare operation. From managing cashflow to processing payroll, tax preparation, etc. we cover it all while ensuring complete reliability. With our help, you always have access to the latest data about your cash reserves and amount owed through different insurance channels, thereby finding it easier to make important business decisions.</p>
          </div>
      </div>
          
      </div>
  </div>
</div>`
    var element = document.querySelector("#main");
    element.scrollIntoView()
  }