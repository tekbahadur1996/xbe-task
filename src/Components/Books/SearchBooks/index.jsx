import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Spinner } from 'react-bootstrap';

import { searchBooks } from '../../../API/books.axios';
import BookDetails from './BookDetails';
import BookList from './BookList';
import { books } from './data';

const SearchBooks = () => {
    const [searchedBook, setSearchedBook] = useState("");
    const [bookList, setBookList] = useState([]);
    const [bookDetails, setBookDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    /**
     * textfield
     * @param {Object} event 
     */
    const searchedBookHandler = (event) => {
        setSearchedBook(event.target.value);
    }

    /**
     * fetch book list
     * @param {Object} event 
     */
    const searchBookHandler = async (event) => {
        setLoading(true);
        try {
            event.stopPropagation();
            event.preventDefault();
            if (!searchedBook) {
                return;
            }
            setBookList([]);
            let bookList = await fetch("https://openlibrary.org/search.json?q=" + searchedBook);
            // let bookList = await new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve(books);
            //     }, 1000)
            // });
            bookList = await bookList.json();
            // console.log(bookList);
            bookList.docs.forEach((book, index) => {
                book.index = index + 1;
            });
            setBookList(bookList.docs);
        }
        catch (e) {
            console.log('searchBook, error', e);
            alert("Error while fetching Book's data");
        }
        setLoading(false);
    }

    const showBookAndDetails = () => {
        if (loading) {
            return (
                <div className="text-center mt-4">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )
        }
        if (!bookDetails) {
            return (
                <BookList
                    bookList={bookList}
                    setBookDetails={setBookDetails}
                />
            )
        }
        else {
            return (
                <BookDetails
                    bookDetails={bookDetails}
                    setBookDetails={setBookDetails}
                />
            )
        }
    }
    return (
        <div>
            <Container className='mt-4'>
                <Row>
                    <Col xs="12">

                        <header>
                            <h3>
                                Books Library
                            </h3>
                        </header>
                    </Col>

                </Row>
                <Form onSubmit={searchBookHandler} className="mt-3">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Search Books</Form.Label> */}
                                <Form.Control type="text" placeholder="Search Books" onChange={searchedBookHandler} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col >
                            <Button variant="primary" type="submit" disabled={loading}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {showBookAndDetails()}
            </Container>
        </div>
    )
}

export default SearchBooks;