import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserData } from 'redux/auth/userSelectors';

const withAuthRedirect = SomeComponent => {
  const PrivateComponent = props => {
    const userData = useSelector(selectUserData);

    return userData ? (
      <SomeComponent {...props} />
    ) : (
      <Navigate replace={true} to={'/login'} />
    );
  };

  return PrivateComponent;
};

export default withAuthRedirect;
