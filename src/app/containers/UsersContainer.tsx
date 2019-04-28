import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserList from '../../components/UserList';
import { getVisibleProducts } from '../../reducers/products';
import { withRouter } from 'react-router-dom';

const UsersContainer = ({ products }) => (
  <UserList>
  {products.map(product =>
    <div>Test</div>
  )}
  </UserList>
)

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default withRouter(connect(
  mapStateToProps
)(UsersContainer));
