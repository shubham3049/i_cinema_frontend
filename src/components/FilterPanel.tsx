type Props = {
    onGenreChange: (genre: string) => void;
    onRatingChange: (rating: number) => void;
    onLanguageChange: (language: string) => void;
  };



  function FilterPanel({
    onGenreChange,
    onRatingChange,
    onLanguageChange
  }: Props) {
    return (
        <div>
            <select onChange={(e) => onGenreChange(e.target.value)}>
                <option value="">Genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
            </select>

            <select onChange={(e) => onRatingChange(Number(e.target.value))}>
  <option value="">Rating</option>
  <option value="2">2+</option>
  <option value="2.5">2.5+</option>
  <option value="3">3+</option>
  <option value="3.5">3.5+</option>
  <option value="4">4+</option>
</select>

<select onChange={(e) => onLanguageChange(e.target.value)}>
  <option value="">Language</option>
  <option value="Hindi">Hindi</option>
  <option value="English">English</option>
  
  <option value="Telugu">Telugu</option>
  <option value="Malayalam">Malayalam</option>
  <option value="Kannada">Kannada</option>
</select>
        </div>
    );
}

export default FilterPanel;