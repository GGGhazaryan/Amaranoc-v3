export default function SearchInput() {
  return (
    <div className="inputPlaceholder">
      <input type="text" placeholder="Որոնում" className="inputToSearch" />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}
