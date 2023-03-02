import { useGlobalContext } from './Context';
import bookmark from './images/icon-bookmark.svg';
import bookmark_checked from './images/icon-bookmark-checked.svg';

const Bookmark = () => {
  const { isBookmarkChecked, setIsBookmarkChecked } = useGlobalContext();

  const handleClick = () => {
    const btn = document.querySelector('.bookmark-btn');
    if (!isBookmarkChecked) {
      btn.classList.add('checked');
      btn.firstChild.nextSibling.textContent = 'Bookmarked';
      setIsBookmarkChecked(true);
    }
    if (isBookmarkChecked) {
      btn.classList.remove('checked');
      btn.firstChild.nextSibling.textContent = 'Bookmark';
      setIsBookmarkChecked(false);
    }
  };

  return (
    <button type="button" className="bookmark-btn btn" onClick={handleClick}>
      {isBookmarkChecked || (
        <img src={bookmark} alt="bookmark" className="bookmark" />
      )}

      {isBookmarkChecked && (
        <img
          src={bookmark_checked}
          alt="bookmark"
          className="bookmark-checked"
        />
      )}

      <span>Bookmark</span>
    </button>
  );
};
export default Bookmark;
