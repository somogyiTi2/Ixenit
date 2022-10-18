import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form'
import Supply from './components/Supply';

function App() {
//kiírja melyik gombot nyomtam meg majd késöbb ezt hozzá adja a megrendelhez
const [MyBooks, SetMyBooks] = useState([
  
])

const addBook = (id, title) => {
  console.log(id, title);
  const MyBook = {id, title}
  SetMyBooks([title,...MyBooks])
  console.log(MyBook);
  }

  const [tempData, setTemodata] = useState([
    {
    "id": 4,
    "title": "Az alkimista",
    "author": {
    "firstName": "Paulo",
    "lastName": "Coelho",
    "birthDate": "1974-08-24"
    }
    },
    {
    "id": 5,
    "title": "A Da Vinci-kód",
    "author": {
    "firstName": "Dan",
    "lastName": "Brown",
    "birthDate": "1964-06-22"
    }
    },
    {
    "id": 6,
    "title": "Tíz kicsi néger",
    "author": {
    "firstName": "Agatha",
    "lastName": "Christie",
    "birthDate": "1890-09-15"
    }
    },
    {
    "id": 7,
    "title": "A kis herceg",
    "author": {
    "firstName": "Antoine",
    "lastName": "de Saint-Exupéry",
    "birthDate": "1900-06-29"
    }
    },
    {
    "id": 8,
    "title": "Két város regénye",
    "author": {
    "firstName": "Charles",
    "lastName": "Dickens",
    "birthDate": "1812-02-07"
    }
    }
    ]
  )
  return (
    <div>
      <Supply tempData={tempData} addBook={addBook}/>
      <Form MyBooks={MyBooks}/>
    </div>
  );
}

export default App;
