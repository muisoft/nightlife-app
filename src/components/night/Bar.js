import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, IconSeparator, FontIcon, Button, Grid, Cell } from 'react-md';

import { withMainComponent } from '../hoc';

import RatingBar from './RatingBar';
import { addNewGoing } from '../../actions';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            going: this.props.going
        }
    }

    addGoing = (bussid) => {
        this.setState({ going: this.state.going + 1 });
        this.props.addGoing({ bussid: bussid });
    }
    
    render() {
        let { name, image_url, url, phone, review_count, rating, bussid, user } = this.props;
        let { going } = this.state;
        
    
        return (
            <Card className="bar-card">
                     <Cell size={2}>
                        <img src={image_url} style={{ width: '100%', height: '100%'}}/>
                     </Cell>
                     <Cell size={8} style={{fontSize: 16}}>
                         <Grid style={{marginTop: 0}}>
                            <Cell size={12} style={{fontSize: 22, color: '#607d8b'}}>
                                <span><a href={url}>{name}</a></span>
                            </Cell>
                            <Cell size={12} style={{marginTop: 0}}>
                                <span className="space">Phone: </span>{phone}
                            </Cell>
                            <Cell size={12} style={{display: 'flex', marginTop: 0}}>
                                <span className="space">Rating: </span>
                                <RatingBar count={rating} />
                                <span className="space">{review_count}</span> Review(s)
                            </Cell>
                         </Grid>
                     </Cell>
                     <Cell size={2}>
                        <Button className="going-button"
                        raised
                        disabled={user.username ? false : true}
                           onClick={() => this.addGoing(bussid)}>
                           {going} <span>Going</span>
                       </Button>
                     </Cell>

            </Card>

        );
    }
}

Bar.PropTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    review_count: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    bussid: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
}

export default withMainComponent(Bar);