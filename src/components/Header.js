import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
   return <h1 className="text-center alert alert-primary">{ title }</h1>  
};
Header.propType = {
   title : PropTypes.string.isRequired
}
export default Header;