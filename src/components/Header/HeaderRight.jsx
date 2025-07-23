import SearchInput from './SearchInput';

export default function HeaderRight() {
  return (
    <div className="headerRightPlaceholder">
      <div className="mainIcons">
        <i className="fa-solid fa-globe"></i>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
      <SearchInput />
    </div>
  );
}
