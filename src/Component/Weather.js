import React from "react";
import "./Weather.css";

import {
  Container,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
export default function Weather(props) {
  if (!props.weather) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Col>
        <Card>
          <CardImg
            top
            width="250px"
            height="250px"
            src="https://atahun.net/wp-content/uploads/2016/06/kIz-Kulesi-internetreklam.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{props.weather.sys.country}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              City : {props.weather.name}
            </CardSubtitle>
            <CardText>
              Temperature Value : {props.weather.main.temp}°C
              <br />
              Description: {props.weather.weather[0].description}
              <br />
              Date : {new Date(1634891599 * 1000).toDateString()}
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <p></p>
    </Container>
  );
}
