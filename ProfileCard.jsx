// src/components/ProfileCard.jsx
export default function ProfileCard({ name, role, bio, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="avatar" />
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  );
}
