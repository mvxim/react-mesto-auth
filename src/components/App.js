import { useCallback, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';
import api from '../utils/api';
import * as auth from '../utils/auth';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import Login from './Login';
import Main from './Main';
import PopupWithConfirmation from './PopupWithConfirmation';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';


function App() {
  const [ isSignUpSuccessful, setIsSignUpSuccessful ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState(
      {
        'name': '',
        'about': '',
        'avatar': '',
        '_id': '',
        'cohort': ''
      });
  const [ userEmail, setUserEmail ] = useState('');
  const [ cards, setCards ] = useState([]);
  const [ selectedCard, setSelectedCard ] = useState({ name: '', link: '' });
  const [ cardToRemoveId, setCardToRemoveId ] = useState('');
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false);
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false);
  const [ isConfirmationPopupOpen, setIsConfirmationPopupOpen ] = useState(
      false);
  const [ isImagePopupOpen, setIsImagePopupOpen ] = useState(false);
  const [ tooltip, setTooltip ] = useState(false);
  const [ isMenuActive, setIsMenuActive ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const history = useHistory();
  
  // Элементы UI блока карточек
  
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    }).catch(err => console.log(err));
  };
  
  const handleAddPlaceSubmit = (card) => {
    handlePopupLoader(true);
    api.createNewPlace(card)
        .then((newFetchedCard) => {
          setCards([ newFetchedCard, ...cards ]);
          closeAllPopups();
        })
        .catch(err => console.log(err))
        .finally(() => {
          handlePopupLoader(false);
        });
  };
  
  const handleCardDeleteClick = (cardId) => {
    setIsConfirmationPopupOpen(!isConfirmationPopupOpen);
    setCardToRemoveId(cardId);
  };
  
  const handleCardDelete = (cardToRemoveId) => {
    handlePopupLoader(true);
    api.removePlace(cardToRemoveId)
        .then(() => {
          setCards((cards) => cards.filter(c => c._id !== cardToRemoveId));
          closeAllPopups();
        })
        .catch(err => console.log(err))
        .finally(() => {
          handlePopupLoader(false);
        });
  };
  
  // Элементы UI в профиле
  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };
  
  const handleCardClick = (cardData) => {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(cardData);
  };
  
  // Элементы UI в попапах
  
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setTooltip(false);
    setSelectedCard({ name: '', link: '' });
  };
  
  const handlePopupLoader = (isLoading) => {
    setIsLoading(isLoading);
  };
  
  const handleUpdateUser = (newUserInfo) => {
    handlePopupLoader(true);
    api.setUserInfo(newUserInfo)
        .then((newFetchedData) => {
          setCurrentUser(newFetchedData);
          closeAllPopups();
        })
        .catch(err => console.log(err))
        .finally(() => {
          handlePopupLoader(false);
        });
  };
  
  const handleUpdateAvatar = (newAvatar) => {
    handlePopupLoader(true);
    api.setUserAvatar(newAvatar)
        .then((newFetchedAvatar) => {
          setCurrentUser(newFetchedAvatar);
          closeAllPopups();
        })
        .catch(err => console.log(err))
        .finally(() => {
          handlePopupLoader(false);
        });
  };
  
  // Управление состоянием авторизации
  
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };
  
  const handleRegistration = (values) => {
    setIsLoading(true);
    auth.register(values).then(response => {
      setIsSignUpSuccessful(true);
      setTooltip(true);
      history.push('/signin');
    })
        .catch((error) => {
          console.log(error);
          setIsSignUpSuccessful(false);
          setTooltip(true);
        })
        .finally(() => setIsLoading(false));
  };
  
  const handleAuth = (values) => {
    setIsLoading(true);
    auth.login(values).then(_ => {
      setIsLoggedIn(true);
      history.push('/');
    })
        .catch((error) => {
          setIsLoggedIn(false);
          console.log(error);
        })
        .finally(() => setIsLoading(false));
  };
  
  
  const tokenCheck = useCallback(() => {
    auth.getContent().then((response) => {
      if (response) {
        setIsLoggedIn(true);
        setUserEmail(response.email);
        history.push('/');
      }
    }).catch((error) => {
      console.log(error);
      setIsLoggedIn(false);
      setUserEmail('');
    });
  }, [ history ]);
  
  useEffect(() => {
    tokenCheck();
    setIsMenuActive(false);
  }, [ tokenCheck ]);
  
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([ api.getPlaces(), api.getUserInfo() ])
          .then(([ places, userInfo ]) => {
            setCards(places);
            setCurrentUser(userInfo);
          })
          .catch(error => {
            console.log(error);
          });
    }
  }, [ isLoggedIn ]);
  
  
  return (
      <CurrentUserContext.Provider value={ currentUser }>
        <div className="page">
          <div className="page__container">
            <Header
                userEmail={ userEmail }
                isLoggedIn={ isLoggedIn }
                onLogOut={ setIsLoggedIn }
                isMenuActive={ isMenuActive }
                showMenu={ setIsMenuActive }
            />
            <Switch>
              <ProtectedRoute
                  exact
                  path="/"
                  loggedIn={ isLoggedIn }
                  cards={ cards }
                  onEditAvatar={ handleEditAvatarClick }
                  onEditProfile={ handleEditProfileClick }
                  onAddPlace={ handleAddPlaceClick }
                  onCardClick={ handleCardClick }
                  onCardLike={ handleCardLike }
                  onCardDeleteClick={ handleCardDeleteClick }
                  component={ Main }
              />
              <Route path="/signup">
                <Register
                    isLoading={ isLoading }
                    onSignup={ handleRegistration }
                />
              </Route>
              <Route path="/signin">
                <Login
                    isLoggedIn={ handleLogin }
                    isLoading={ isLoading }
                    onSignin={ handleAuth }
                    setIsLoading={ setIsLoading }
                />
              </Route>
            </Switch>
            <EditAvatarPopup
                isOpen={ isEditAvatarPopupOpen }
                isLoading={ isLoading }
                onClose={ closeAllPopups }
                onUpdateAvatar={ handleUpdateAvatar }
            />
            
            <EditProfilePopup
                isOpen={ isEditProfilePopupOpen }
                isLoading={ isLoading }
                onClose={ closeAllPopups }
                onUpdateUser={ handleUpdateUser }
            />
            
            <AddPlacePopup
                isOpen={ isAddPlacePopupOpen }
                isLoading={ isLoading }
                onClose={ closeAllPopups }
                onPlaceAdd={ handleAddPlaceSubmit }
            />
            
            <PopupWithConfirmation
                isOpen={ isConfirmationPopupOpen }
                isLoading={ isLoading }
                onClose={ closeAllPopups }
                onSubmit={ handleCardDelete }
                card={ cardToRemoveId }
            />
            
            <ImagePopup
                isOpen={ isImagePopupOpen }
                card={ selectedCard }
                onClose={ closeAllPopups }
            />
            
            <InfoTooltip
                isOpen={ tooltip }
                onClose={ closeAllPopups }
                isSuccess={ isSignUpSuccessful }
            />
            <Footer/>
          
          
          </div>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
