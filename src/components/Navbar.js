import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {

  render() {
    return (
      
<header>
<nav id="navbar_top" class="navbar-dark bg-primary">
 <div class="container">
  <div class="row">
    <div class ="col-sm-3">
    <Link to="/" class="navbar-brand">Home</Link>
    <Link to="/add" class="navbar-brand">Sell</Link>
    </div>
    <div class ="col-sm-3">
    </div>
    <div class="col-sm-6" id="id">
    <Link to="/account" class="navbar-brand">{this.props.account}</Link>
    </div>
  <div class="collapse navbar-collapse" id="main_nav">
  <ul class="navbar-nav ms-auto">
  </ul>
  </div>
  </div> 
 </div> 
</nav>
</header>
    );
  }
}

export default Navbar;