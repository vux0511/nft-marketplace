import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12">
            <div id="content">
              
              <h2 id="pr">Home</h2>
                  { this.props.products.map((product, key) => {
                    return(
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-3">
                          <div class= "card"> 
                          <img class="card-img-top" src="https://cf.shopee.vn/file/166cf29915b249665a79d3b14e78c5df_tn"
                           href="#"></img>
                            <div class="card-body">
                              <h5>{product.name}</h5>
                              <h5>{product.owner}</h5>
                              <div class="row">
                                <div class="col-sm-8"><h5>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</h5></div>
                                <div class="col-sm-4">{ (product.owner != this.props.account)
                            ? <button class="btn btn-primary"
                                name={product.id}
                                value={product.price}
                                onClick={(event) => {
                                  this.props.purchaseProduct(event.target.name, event.target.value)
                                }}
                              >
                                Buy
                              </button>
                            : null
                          }</div>
                              </div>                        
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })}
              </div>
            </main>
          </div>
        </div>
    );
  }
}

export default Main;