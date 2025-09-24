import "./Learn.css";

export default function Learn() {
    const user = {
        name: "Anderson Joseph",
        birthYear: 2000,
        imageUrl: "https://avatar.iran.liara.run/public/48"
    };
    const currentYear = new Date().getFullYear();
    const age = currentYear - user.birthYear;

    return (
        <div className="user-card">
            <img className="avatar" src={user.imageUrl} alt={"Photo of " + user.name} />
            <h1>{user.name}</h1>
            <p>Age: {age}</p>
            <p>Born In: {user.birthYear}</p>
        </div>
    );
}