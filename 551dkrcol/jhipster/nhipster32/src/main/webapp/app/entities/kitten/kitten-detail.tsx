import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './kitten.reducer';
import { IKitten } from 'app/shared/model/kitten.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IKittenDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const KittenDetail = (props: IKittenDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { kittenEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Kitten [<b>{kittenEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{kittenEntity.name}</dd>
          <dt>
            <span id="color">Color</span>
          </dt>
          <dd>{kittenEntity.color}</dd>
          <dt>
            <span id="size">Size</span>
          </dt>
          <dd>{kittenEntity.size}</dd>
        </dl>
        <Button tag={Link} to="/kitten" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/kitten/${kittenEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ kitten }: IRootState) => ({
  kittenEntity: kitten.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(KittenDetail);
