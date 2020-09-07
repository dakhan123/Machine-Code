import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardImgOverlay, Button} from "reactstrap";
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

    function RenderMenuItem({datum}) {
      return (
        <Card>
        <Link to="/#" >
          <CardImg width="100%" height="100%" src={baseUrl + datum.image} alt={datum.name}></CardImg>
          <CardTitle><h3>{datum.name}</h3></CardTitle>
          </Link>
          <CardImgOverlay>
            <Button close/>
          </CardImgOverlay>
          <CardText>{datum.description}</CardText>
        </Card>
        );
    }

    const Menu = (props) => {
      const menu = props.data.data.map((datum) => {
        return (
            <div key={datum.id} className="col-md-4">
              <RenderMenuItem datum={datum} />
            </div>
          );
        });

        if (props.data.isLoading) {
        return(
        <div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>
        );
      }
      else if (props.data.errMess) {
        return(
        <div className="container">
            <div className="row">
                <h4>{props.data.errMess}</h4>
            </div>
        </div>
        );
      }

      else
        return (
          <div className="container">
            <div className="row">
              
              <div className="col-12">
                <h3>Machine_Code_Test</h3> By Danish Asad Khan
                <hr />
              </div>
            </div>
            <div className="row">{menu}</div>
          </div>
          );
      }


export default Menu;