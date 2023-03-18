import React from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import { Button, Row, Col } from 'react-bootstrap';
import classes from './bookDetails.module.css';

const BookDetails = (props) => {
    const { bookDetails, setBookDetails } = props;
    if (!bookDetails) {
        return null;
    }
    return (
        <Row className={`mt-4 ${classes.container}`}>
            <Col xs="12">
                <Button onClick={() => setBookDetails(null)} variant="secondary">Back</Button>
            </Col>
            <Col xs="12">
                <div className={classes.header}>
                    Title
                </div>
                <div className={classes.children}>
                    {bookDetails.title}
                </div>

                <div className={classes.header}>
                    Total Editions
                </div>
                <div className={classes.children}>
                    {bookDetails.edition_count}
                </div>

                <div className={classes.header}>
                    Rating
                </div>
                <div className={classes.children}>
                    {bookDetails.ratings_average ? Number(bookDetails.ratings_average).toFixed(2) : "NA"}
                </div>

                <div className={classes.header}>
                    Persons
                </div>
                <div className={classes.children}>
                    {bookDetails.person ? bookDetails.person.join(', ') : "NA"}
                </div>

                <div className={classes.header}>
                    Publish Date
                </div>
                <div className={classes.children}>
                    {bookDetails.publish_date ? bookDetails.publish_date.join(', ') : "NA"}
                </div>

                <div className={classes.header}>
                    ISBN
                </div>
                <div className={classes.children}>
                    {bookDetails.isbn ? bookDetails.isbn.join(', ') : "NA"}
                </div>
            </Col>
        </Row>
    )
}

BookDetails.propTypes = {
    bookDetails: PropTypes.object,
    setBookDetails: PropTypes.func
};

export default BookDetails;