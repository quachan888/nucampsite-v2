export const validateCommentForm = (values) => {
    const errors = {};
    const { author, commentText, rating } = values;

    if (!rating) {
        errors.rating = 'Required';
    }

    if (author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (author.length > 15) {
        errors.author = 'Must be 15 characters or less';
    }

    return errors;
};
