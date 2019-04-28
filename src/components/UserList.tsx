import * as React from 'react';
import * as PropTypes from 'prop-types'
import localization from "../app/Localization";

const UserList = ({  children }) => (
  <div className="content-wrapper">
    <div className="container-fluid pet-background m-b-30">
      <div className="row">
        <div className="col-10 mx-auto text-white p-t-40 p-b-90">
          <h4>
            {localization.user.title}
          </h4>
          <p className="opacity-75 ">
            {localization.user.description}
          </p>
        </div>
      </div>
    </div>
  </div>

)

UserList.propTypes = {
  children: PropTypes.node
}

export default UserList;
