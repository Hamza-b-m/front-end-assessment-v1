import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProductById} from '../../../reducers/products';
import ProductForm from './ProductForm';
import {Link, withRouter} from 'react-router-dom';
import {updateProductForm} from '../../../actions/products';

class UpdateFormContainer extends Component {
    render() {
        const {product, categories, dispatch, ...rest} = this.props;

        if (!product) {
            return null;
        }

        return (
            <>
                <Link to='/'>Home</Link>
                <ProductForm
                    onSave={(data) => updateProductForm(product.id, data)(dispatch, rest )}
                    product={product}
                    categories={categories}
                />
            </>
        );
    }
}

UpdateFormContainer.propTypes = {
    product: PropTypes.object,
    categories: PropTypes.array,
    history: PropTypes.object,
};

const mapStateToProps = (state, {productId}) => {
    return {
        product: getProductById(state, productId),
        categories: state.categories,
    }
};

export default connect(mapStateToProps)(withRouter(UpdateFormContainer));
