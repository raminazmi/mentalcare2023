import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            <div>
                <Component {...props} />
            </div>
        )} />
    );

    
};

export default PublicRoute;