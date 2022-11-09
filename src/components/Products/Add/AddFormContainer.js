import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import ProductForm from '../Update/ProductForm';
import {createProductForm} from '../../../actions/products';

class AddFormContainer extends Component {
    render() {
        const {categories, dispatch, ...rest} = this.props;

        return (
            <>
                <Link to='/'>Home</Link>
                <ProductForm
                    onSave={(data) => createProductForm(data)(dispatch, rest)}
                    categories={categories}
                />
            </>
        );
    }
}

AddFormContainer.propTypes = {
    categories: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};

export default connect(mapStateToProps)(withRouter(AddFormContainer));
