import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
    <MainNavigation/>
      <Switch>
      <Route path='/' exact>
        <AllMeetups />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      </Switch>


      {/* <Favorites /> */}
      {/* <Router>
            <Route path="/new-meetup" element={<NewMeetupPage/>}>           
            </Route>
            <Route path="/all-meet" element={<AllMeetups />}>         
            </Route>
            <Route path="/favorites" element={<Favorites />}>          
            </Route>
    </Router> */}
      {/* <Routes>
        <Route path='/'>
          <NewMeetupPage />
        </Route>
        <Route path='/new-meetup'>
          <AllMeetups />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Routes> */}
    </div>
  )
}

export default App;
