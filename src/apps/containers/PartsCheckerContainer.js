import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addUsersActions from '../partsChecker/actions/partsCheckerPanel/users';
import Header from '../partsChecker/components/common/Headers';
import Sidebar from '../partsChecker/components/common/Sidebar';
import Users from '../partsChecker/components/users/Users';

function PartsCheckerContainer(props){
  const { actions, usersData } = props;

  return (
    <div>
      <Header />
      <Sidebar />
    
    <Users
      actions={actions}
      usersData = {usersData}
    />
    </div>
  )
}
  function mapStateToProps(state){
    return {
      usersData: state.usersData
    }
  }
  function mapDispatchToProps(dispatch){
    return {
      actions: {
        addUsersActions: bindActionCreators(addUsersActions, dispatch)
      } 
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PartsCheckerContainer);
