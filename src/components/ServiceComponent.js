import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderServiceItem({ service }) {
  return (
    <Card>
      <Link to={`/service/${service.id}`}>
        <CardImg
          width="100%"
          src={baseUrl + service.image}
          alt={service.name}
        />
        <CardImgOverlay>
          <CardTitle>{service.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Service = (props) => {
  const menu = props.services.services.map((service) => {
    return (
      <div key={service.id} className="col-12 col-md-5 m-1">
        <RenderServiceItem service={service} />
      </div>
    );
  });
  if (props.services.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.services.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Service</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Service</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
};

export default Service;
