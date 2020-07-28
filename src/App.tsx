import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Search from './components/search';
import collection from './assets/data.json';
import List from './components/list';
import {useHistory} from 'react-router';

const SEARCH_PARAM = '?search=';

const parseSearchParam = (searchParam: string): string =>
  searchParam.slice(searchParam.indexOf(SEARCH_PARAM) + SEARCH_PARAM.length);

const filterCollection = (searchParam: string): string[] =>
  collection.filter(value => value.includes(searchParam));

const App: React.FC = () => {
  const history = useHistory();
  const parsedSearch = parseSearchParam(history.location.search);
  const [filteredCollection, setFilteredCollection] = useState(filterCollection(parsedSearch));

  const changeHandler = (search: string) => {
    if (!search) {
      history.push('');
    } else {
      history.push(`?search=${search}`);
    }
    setFilteredCollection(filterCollection(search));
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Search onChange={changeHandler} initialValue={parsedSearch} />

        <List data={filteredCollection} />
      </Container>
    </div>
  );
};

export default App;
