import { Main } from './App.style';
import { CardsUsersList } from './CardsUsersList/CardsUsersList';
import users from '../db/users.json';

function App() {
    return (
        <>
            <Main>
                <CardsUsersList users={users} />
            </Main>
        </>
    );
}

export default App;
