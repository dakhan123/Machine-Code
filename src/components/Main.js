import React from 'react';
import Menu from './MenuComponent';
import Header from './Header';
import Footer from './Footer';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchData} from '../redux/ActionCreators';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

  const mapStateToProps = state => {
    return {
      data: state.data
      };
  }

  const mapDispatchToProps = (dispatch) => ({
    fetchData:  () => {dispatch(fetchData())}
  });

class Main extends React.Component {
  
  componentDidMount() {
    this.props.fetchData();
  }

  render(){
    
  return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/index.html" component={() => <Menu data={this.props.data} />} />
              <Route exact path="/menu" />
              <Route exact path="/about" />
              <Route exact path="/menu/:dataId" />
              <Route exact path="/contactus" />
              <Redirect to="/index.html" />
            </Switch>
          </CSSTransition>  
        </TransitionGroup>
        <Footer />
      </div>
  );
}
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));