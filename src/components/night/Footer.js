import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => {
  return (
     <footer className = "md-cell md-cell--12 md-text-right" >
        <div style={{ display: 'flex', flexDirection: 'row', float: 'right', width: 200, height: 90, fontStyle: 18}}>
              <div style={{ marginTop: 28, marginRight: -7, fontSize: 'italic' }}>
                  <h4>Powered by</h4>
              </div>
              <div style={{width: 90}}>
                  <a style={{width: '80%'}} href="https://www.yelp.com"><img src="/img/yelp.png" width='100%' height='80%' /></a>
              </div>
          </div>
    </footer>
  )
}

Footer.propTypes = {

}

export default Footer;