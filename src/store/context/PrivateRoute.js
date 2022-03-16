// import React, { useContext  } from 'react'
// import {  Route, Navigate  } from "react-router-dom";
// import { AuthContext } from './AuthContext';
// const PrivateRoute = ({component:RouteComponent,...rest}) => {
//     const {user}=useContext(AuthContext)
//   return (
//     <Route
//       {...rest}
//       render={(routeProps) =>
//         !user ? <Navigate to={'/signUp'} /> : <RouteComponent {...routeProps} />
//       }
//     />
//   )
// }

// export default PrivateRoute