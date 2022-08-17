import AuthUser from "./AuthUser";

export default function Dashboard() {
    const {user} = AuthUser();
    return (
        <div className="container mt-4">
            <h2>Welcome {user.name}</h2>
        </div>
    );
}