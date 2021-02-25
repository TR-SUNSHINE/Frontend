import "./Map.css";

const Map = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card p-1">
                <iframe className="iframe--map"
                    src="https://www.google.com/maps/d/embed?mid=1F0OhEou31qd5wCPlKahJ8INJa75su22D"></iframe>
            </div>
        </div>
    );
};

export default Map;


