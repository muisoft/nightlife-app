import React from 'react';
import PropTypes from 'prop-types';
import { FontIcon } from 'react-md';

const RatingBar = ({ count }) => {
    let list = Array(parseInt(count)).fill(0);

    const renderBar = () => {
       return list.map((l, i) => {
            return (
                <FontIcon key={i}  iconClassName="fa fa-star" className="space" />
            );
        });
    }  
    const rem = () => {
         if (list.length !== 5) {
            let size = 5 - list.length;
            let rem = Array(size).fill(0);
            return rem.map((l, i) => {
              return (
                  <FontIcon key={i} iconClassName="fa fa-star-o" className="space" />
              );
            });

        }
    }
    
  return (
    <div className="space">
          {
             renderBar()   
          }
          {
              rem()
          }
    </div>
  )
}

RatingBar.PropTypes = {

}

export default RatingBar;
