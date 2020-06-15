import React from 'react';
import Cast from './Cast';
import {Link} from 'react-router';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function CastList({data}) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;

  const style = {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center'
  };

    let casts = data.map(function(cast) {
      if(cast.profile_path != null) {
        return(
          <Col xs={4} sm={3} md={2} key={cast.id} >
            <StyledLink to={'/star/'+cast.id} ><Cast cast={cast} /></StyledLink>
          </Col>
        );
      }

      return null;
    });

    return(
      <div>
        <h3>Casts</h3>
        <div style={style}>{casts}</div>
      </div>
    );
}
