
export function Image({ src, alt = "Placeholder", style }) {
  return (
    <div className="d-inline-block mw-100" style={style}>
      <img className="mw-100" src={src} alt={alt} />
    </div>
  );
}
