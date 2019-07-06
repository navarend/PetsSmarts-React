import React from 'react';

const Header = ({title}) => {
   // <Header><h1 className="text-center">{ title }</h1></Header>
   return <h1 className="text-center alert alert-primary">{ title }</h1>  
};
export default Header;