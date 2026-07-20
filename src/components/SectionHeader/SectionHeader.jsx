export const SectionHeader = ({ index, label, title }) => {
  return (
    <header className="section-header">
      <p className="section-eyebrow">
        <span>{index}</span> / {label}
      </p>
      <h2 className="section-title">{title}</h2>
    </header>
  );
};
