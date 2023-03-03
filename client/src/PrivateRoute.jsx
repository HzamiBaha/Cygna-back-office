const PrivateRoute = ({ element: Element, logout, ...rest }) => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (!token) {
        console.log('No token found - redirecting to /auth');
        return <Navigate to="/auth" />;
    }

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        // Call the `logout` function passed down from the `Dashboard` component
        logout();
    };

    return (
        <Route
            {...rest}
            element={
                <>
                    <Element logout={handleLogout} {...rest} />
                </>
            }
        />
    );
};

export default PrivateRoute;