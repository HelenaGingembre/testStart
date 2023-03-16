import { Main } from './App.style';
import { CardsUsersList } from './CardsUsersList/CardsUsersList';
import users from '../db/users.json';

function App() {
    console.log('users', users.json);
    return (
        <>
            <Main>
                <CardsUsersList users={users} />
            </Main>
        </>
    );
}

export default App;
