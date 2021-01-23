import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Kitten from './kitten';
import KittenDetail from './kitten-detail';
import KittenUpdate from './kitten-update';
import KittenDeleteDialog from './kitten-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={KittenDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={KittenUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={KittenUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={KittenDetail} />
      <ErrorBoundaryRoute path={match.url} component={Kitten} />
    </Switch>
  </>
);

export default Routes;
