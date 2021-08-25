import { searchIcon } from '../../data/data';
import './scss/searchBox.css';

export const SearchBox = ({ searchResult, setSearchResult, userData }) => {

    const onChange = (e) => {
        let result = userData.filter(item => {
            return item.getFullName().toUpperCase().includes(`${e.target.value.toUpperCase()}`);
        });

        setSearchResult(result);
    }
    

    return (
        <div className="searchBox">
            <div className="searchIcon">
                {searchIcon}
            </div>
            <div className="searchInput">
                <input type="text" name="search" placeholder="Search users" autoComplete="off" onChange={onChange}/>
            </div>
        </div>
    );
}