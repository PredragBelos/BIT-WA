import { searchIcon } from '../../data/data';
import './scss/searchBox.css';

export const SearchBox = ({userData, setUserData}) => {

    const onChange = (e) => {
       let result = userData.filter(object => {
        return object.name.includes(`${e.target.value}`)
       });
       
       console.log(result);
       setUserData(result);
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