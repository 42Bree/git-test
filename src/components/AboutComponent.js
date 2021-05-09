import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
function About(props) {
  // const leaders = props.leaders.map((leader) => {
  //     return (
  //         <p>Leader {leader.name}</p>
  //     );
  // });

  function RenderLeader({ leaders }) {
    // 보통 function을 만드는 경우는 rendering하는 경우임.
    return (
      <div>
        <Media className="mt-5">
          <Media left className="mr-5">
            <Media
              object
              src={baseUrl + leaders.image}
              alt={leaders.name}
              width="300"
              height="300"
            />
          </Media>
          <Media body>
            <Media heading>{leaders.name}</Media>
            <p>{leaders.designation}</p>
            <p>{leaders.description}</p>
          </Media>
        </Media>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Lenny’s Hair Salon is a vintage modern hair salon for both ladies
            and gents, located on Busan. We offer a warm and inviting atmosphere
            for you to relax, enjoy some great tunes and greater conversation
            while pampering yourself. Ladies can enjoy a wide range of services
            including high quality hair cuts, styles and color services that can
            bring your imagination to life. For the gents, we offer the unique
            experience of the traditional barber cut. Call today to schedule
            your appointment, 010-1111-2222!
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 May. 2021</dd>
                <dt className="col-6">The Salon</dt>
                <dd className="col-6">The Salon Inc Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,3752</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">15</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">Hair that slays starts at the salon</p>
                <footer className="blockquote-footer">
                  Jena
                  <cite title="Source Title">TheSalonBusiness.com</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
        </div>
        <div className="col-12">
          <Media list>
            {props.leaders.leaders.map((leader) => (
              <RenderLeader leaders={leader} />
            ))}
          </Media>
        </div>
      </div>
    </div>
  );
}

export default About;
