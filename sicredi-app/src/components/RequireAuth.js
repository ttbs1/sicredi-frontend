import { useLocation, Navigate } from 'react-router-dom';

export default function RequireAuth({ user, children }: { user: String; children: JSX.Element }) {

    let location = useLocation();
    const auth = user;
    if (!auth) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}