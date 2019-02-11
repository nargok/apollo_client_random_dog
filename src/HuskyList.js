import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { HUSKY_IMAGES } from './graphql';
import './HuskyList.css';

class HuskyList extends Component {

  refreshPage = () => {
    window.location.reload();
  }

  get_ramdom_images = (images) => {
    let huskyList = []
    for (var i = 0; i < 10; i++ ) {
      huskyList.push(images[Math.floor(Math.random() * images.length)]);
    }
    return huskyList;
  }

  render() {
    return (
      <React.Fragment>
      <Query query={HUSKY_IMAGES}>
        {
          ({ loading, error, data}) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const images = data.huskyCrazy.images;
            const huskyList = this.get_ramdom_images(images);

            return (
              <React.Fragment>
                <h1>ハスキー犬画像</h1>
                <div>
                  <Button primary onClick={this.refreshPage}>
                    <span role="img" aria-label="footprint">🐾</span>
                    Reload
                  </Button>
                  <Link to="/random"><Button>Random</Button></Link>
                  <ul>
                    {
                      huskyList.map((item, index) =>
                        <li key={index} className="huskyItem">
                          <img src={item} alt="huskyImage" />
                        </li>
                      )
                    }
                  </ul>
                </div>
              </React.Fragment>
            )
          }
        }
      </Query>
      </React.Fragment>
    );
  }
}

export default HuskyList;