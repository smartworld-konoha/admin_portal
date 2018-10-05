import React, { PropTypes } from 'react';

import { Button, LinkTo } from '../../../helpers';

function EventTagDelete({ itemID, onDelete }) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Deleting record:</h1>
          </div>
          <div className="panel-body">
            <LinkTo url={`eventTags/${itemID}`}>Event Tag #{itemID}</LinkTo>
          </div>
        </div>
        <div className="btn-group">
          <LinkTo className="btn btn-default" url="eventTags">Cancel</LinkTo>
          <Button color="danger" onClick={() => onDelete(itemID)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

EventTagDelete.propTypes = {
  itemID: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default EventTagDelete;