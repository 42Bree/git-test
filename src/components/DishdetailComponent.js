import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

/* Function to display the selected dish */
function RenderDish({dish}) {

    if (dish != null)
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return(
            <div></div>
        );
}

function RenderComments({comments}) {

    if (comments == null)
        return(
            <div></div>
        )

    const dishComment = comments.map((comment) => {
        return (
            <li key={comment.id} className="m-1">
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        )
    });
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {dishComment}
            </ul>
        </div>
    )
}

const DishDetail = (props) => {

    if(props.selectedMenuDish!=null)
        return (
            <div className="container">
            <div className="row">
                <RenderDish dish={props.selectedMenuDish} />
                <RenderComments comments={props.selectedMenuDish.comments} />
            </div>
            </div>
        );
    else
       return (
            <div></div>
        );
}

export default DishDetail;