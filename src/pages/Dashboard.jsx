const Dashboard = () => {
    return (
        <div>
            {
                user && (
                    <p>{user.name}</p>
                )
            }
        </div>
    )
};

export default Dashboard;
