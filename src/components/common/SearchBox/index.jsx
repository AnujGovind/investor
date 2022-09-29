import React, { useState, useEffect } from "react";
import cn from 'classnames';
import { maxLength } from 'constants/maxLength'//'constants/maxLength';
import './index.css';
import { errorMessages } from 'constants/errorMessages';
import searchIcon from 'assets/icons/search.svg';
import _ from 'lodash';

const SearchBox = (props) => {

    const [searchTxt, setSearchTxt] = useState('');
    const [callApi, setCallApi] = useState(false);

    const {searchResult, placeholder, } = props;
    const [debouncedCallApi] = useState(() => _.debounce(() => setCallApi(true), 500));
    
    const handleChange = (e) => {
        setCallApi(false);
        setSearchTxt(e.target.value||'');
        debouncedCallApi();
    }

    const clearSearchTxt = () => {
      setCallApi(false);
      setSearchTxt('');
      debouncedCallApi();
    }
      
    useEffect(() => {
      if (callApi)
        searchResult(searchTxt);
    }, [callApi]);    

     

   return (<div className={cn("search-container", {
        // [rootClass]: rootClass,
        // [width]: width,
      })}>
        <input
         data-testid="seacrh-input"
          name="query"
          type="text"
          maxLength={maxLength.searchBoxMaxLength + 1}
          value={searchTxt}
          onChange={handleChange}
          placeholder={placeholder}
          className="search-input show-search search-input-border"
          autoComplete="off"
        />
        <span className="input-grp-pos">           
          {(searchTxt || '').length > 0 && ( 
            <button
              data-testid="search-user"
              className="cross-icon"
              onClick={clearSearchTxt}
              type="reset">
            </button>
            )} 


          <button
            type="button"
            className="search-button search-button-pos search-icon-button br-radius10-right"
          >
             <img
                 className="search-img"
                 alt="Search"
                 title="Search"
                 width="20"
                 src={searchIcon}
             />
          </button>
        </span>
        {( searchTxt ||'').length >=  maxLength.searchBoxMaxLength  && (
          <div className='errormessage erroralignment'>
              {errorMessages.maxSearchLength(maxLength.searchBoxMaxLength)}
          </div>
         )}
      </div>
    
      );
};

export default SearchBox;