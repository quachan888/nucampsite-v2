import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { validateCommentForm } from '../../utils/validateCommentForm';

const CommentForm = ({ campsiteId }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        console.log(comment);
        setModal(false);
    };

    return (
        <>
            <Button outline onClick={toggle}>
                <i className="fa fa-pencil fa-lg" />
                Add Comment
            </Button>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle}>Add Comment</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{ rating: '', author: '', commentText: '' }}
                        onSubmit={handleSubmit}
                        validate={validateCommentForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>

                                <Field name="rating" as="select" className="form-control">
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                                <ErrorMessage name="rating">
                                    {(msg) => <p className="text-danger">{msg}</p>}{' '}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>

                                <Field
                                    name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                ></Field>
                                <ErrorMessage name="author">
                                    {(msg) => <p className="text-danger">{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="commentText">Comment</Label>
                                <Field
                                    name="commentText"
                                    as="textarea"
                                    rows="12"
                                    className="form-control"
                                />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default CommentForm;
