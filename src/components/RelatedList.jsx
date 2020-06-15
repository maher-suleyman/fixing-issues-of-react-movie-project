import React , { Component } from 'react';
import RelatedPoster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class RelatedList extends Component{

  render() {
  const style={
    marginTop: '50px',
	  display: 'flex',
    flexWrap: 'wrap',
  }
  
  // Some of movies has no related ones such as "THE LAST DAYS OF AMERICAN CRIME" movie
  if(this.props.data.length === 0) {
    return (
      <div style={{marginTop: '50px', marginBottom: '50px'}}>
        <h2>Related Movies:</h2>
        <h2>Oops!! There are NO related movies to this one :(</h2>
      </div>
      
    );
  }


    let relateds = this.props.data.filter(function(related) {
      return related.poster_path != null;
    }).map(function(related) {
        return(
            <Col xs={6} sm={4} md={6} key={related.id} >
            <Link to={'/movie/'+related.id} ><RelatedPoster info id={related.id} path={related.poster_path} title={related.title} voteAverage={related.vote_average} release_date={related.release_date} responsive /></Link>
          </Col>
        );
    });

    return(
      <Grid fluid={false} style={style} >
          <h2>Related Movies</h2>
        <Row >
          {relateds}
        </Row>
      </Grid>
    );
  }
}
