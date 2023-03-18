import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Button, Table, Row, Col, Figure } from 'react-bootstrap';
import classes from './bookList.module.css';

const BookList = (props) => {
    const { bookList, setBookDetails } = props;
    if (!bookList || !bookList.length) {
        return null;
    }

    /**
     * render image
     * @param {Object} book 
     * @returns jsx
     */
    const showFigure = (book) => {
        let imagePath = book.figure;
        if (imagePath) {
            return (
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={imagePath}
                    />
                    <Figure.Caption>
                        {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
                    </Figure.Caption>
                </Figure>
            );
        }
        return null;
    }
    return (
        <Row className='mt-4'>
            <Col xs="12">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                            <th>Cover Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map(book => (
                            <tr key={uuidv4()}>
                                <td>{book.index}</td>
                                <td className={classes.viewBookCell} title='View Book Details' onClick={() => setBookDetails(book)}>{book.title}</td>
                                <td>{book.author_name ? book.author_name.join(", ") : book.author_name}</td>
                                <td>{book.ratings_average ? Number(book.ratings_average).toFixed(2) : "NA"}</td>
                                <td>
                                    {showFigure(book)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

BookList.propTypes = {
    bookList: PropTypes.array,
    setBookDetails: PropTypes.func
};

export default BookList;