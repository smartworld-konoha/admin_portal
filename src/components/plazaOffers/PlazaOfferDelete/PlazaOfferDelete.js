import React, { PropTypes } from 'react';

import { Button, LinkTo } from '../../../helpers';

function PlazaOfferDelete({ itemID, onDelete }) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Deleting record:</h1>
          </div>
          <div className="panel-body">
            <LinkTo url={`plazaOffers/${itemID}`}>Plaza Offer #{itemID}</LinkTo>
          </div>
        </div>
        <div className="btn-group">
          <LinkTo className="btn btn-default" url="plazaOffers">Cancel</LinkTo>
          <Button color="danger" onClick={() => onDelete(itemID)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

PlazaOfferDelete.propTypes = {
  itemID: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PlazaOfferDelete;