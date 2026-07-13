export default function CharacterCard({ name, image, species }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{name}</h3>
      <p>{species}</p>
    </div>
  );
}
