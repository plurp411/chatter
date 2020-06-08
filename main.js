var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class MainTitleDiv extends React.Component {
//   render() {
//     return (
//       <div className="main-title-div">
//         <div className="main-title-labels-div">
//           <img className='profile-image' src="call_program.png"></img>
//           <label className='main-title-top-label'>Collin Howard</label>
//           <label className='main-title-bottom-label'>collin.riley.howard@gmail.com</label>
//           <label className='main-title-bottom-label'>408-717-0173</label>
//         </div>
//         <div className="main-title-bottom-labels-div">
//           <label className="main-title-scroll-label">&#8681;&emsp;&emsp; scroll &emsp;&emsp;&#8681;</label>
//         </div>
//       </div>
//     );
//   }
// }

// var FB_CONFIG = {
//   apiKey: "AIzaSyCXe08GXfiLcvWO2aYckY7s-eTMxkp3j-8",
//   authDomain: "test-page-3520d.firebaseapp.com",
//   databaseURL: "https://test-page-3520d.firebaseio.com",
//   projectId: "test-page-3520d",
//   storageBucket: "test-page-3520d.appspot.com",
//   messagingSenderId: "460082871451",
//   appId: "1:460082871451:web:9493492586b77c63ae9a3e",
//   measurementId: "G-M0HZGGGG13"
// };

var USER = {
  id: '',
  name: '',
  email: ''
};

var CHAT_ID = '';

// let CHAT_INFO = {};

// let USER_NAMES_IDS_DICT = {};

var CHAT_USER_NAMES = [];

var CHAT_USERS_DICT = {};

var ALL_USERS_DICT = {};

var IS_GHOST_MODE = false;

var LAST_MESSAGE = '';

var IS_ON_PAGE = false;

var SELF_COLOR = '#c542f5';
var OTHER_COLOR = '#4287f5';

function scrollToBottom() {
  var messagesDiv = document.getElementById("messages-div");
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

var ActiveUsersDiv = function (_React$Component) {
  _inherits(ActiveUsersDiv, _React$Component);

  function ActiveUsersDiv(props) {
    _classCallCheck(this, ActiveUsersDiv);

    var _this = _possibleConstructorReturn(this, (ActiveUsersDiv.__proto__ || Object.getPrototypeOf(ActiveUsersDiv)).call(this, props));

    _this.updateActiveUserNamesState = _this.updateActiveUserNamesState.bind(_this);

    _this.state = {
      activeUserNames: []
    };
    return _this;
  }

  _createClass(ActiveUsersDiv, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateActiveUserNamesState();
    }
  }, {
    key: 'getActiveUsersList',
    value: function getActiveUsersList(activeUserNames) {
      var activeUsersList = activeUserNames.map(function (userName, index) {
        return React.createElement(
          'button',
          { type: 'button', className: 'list-group-item w-100', key: index },
          userName
        );
      });
      return activeUsersList;
    }
  }, {
    key: 'updateActiveUserNamesState',
    value: function updateActiveUserNamesState() {

      var activeUserNames = [];

      // for (let i = 0; i < CHAT_USERS_DICT; i++) {
      //   const userName = CHAT_USER_NAMES[i];
      //   const userId = getKeyByValue(ALL_USERS_DICT, userName);
      //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      //   console.log(ALL_USERS_DICT[userId].isActive);
      //   if (ALL_USERS_DICT[userId].isActive) {
      //     activeUserNames.push(userName);
      //   }
      // }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.entries(CHAT_USERS_DICT)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var key = _ref2[0];
          var value = _ref2[1];

          if (key != USER.id) {
            var userDict = ALL_USERS_DICT[key];
            if (userDict.isActive) {
              activeUserNames.push(userDict.name);
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setState({
        activeUserNames: activeUserNames
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var activeUsersList = this.getActiveUsersList(this.state.activeUserNames);

      if (activeUsersList.length > 0) {

        return React.createElement(
          'div',
          null,
          'Active Users:',
          React.createElement(
            'div',
            { className: 'list-group mt-1' },
            activeUsersList
          )
        );
      } else {

        return React.createElement(
          'div',
          null,
          'No Active Users'
        );
      }
    }
  }]);

  return ActiveUsersDiv;
}(React.Component);

var ChatInfoModal = function (_React$Component2) {
  _inherits(ChatInfoModal, _React$Component2);

  function ChatInfoModal(props) {
    _classCallCheck(this, ChatInfoModal);

    var _this2 = _possibleConstructorReturn(this, (ChatInfoModal.__proto__ || Object.getPrototypeOf(ChatInfoModal)).call(this, props));

    _this2.updateIsGhostModeState = _this2.updateIsGhostModeState.bind(_this2);

    _this2.state = {
      isGhostMode: false
    };
    return _this2;
  }

  _createClass(ChatInfoModal, [{
    key: 'updateIsGhostModeState',
    value: function updateIsGhostModeState(isGhostMode) {
      this.setState({
        isGhostMode: isGhostMode
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'modal fade', id: 'chatInfoModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'chatInfoModalLabel', 'aria-hidden': 'true' },
        React.createElement(
          'div',
          { className: 'modal-dialog' },
          React.createElement(
            'div',
            { className: 'modal-content' },
            React.createElement(
              'div',
              { className: 'modal-header' },
              React.createElement(
                'h5',
                { className: 'modal-title', id: 'chatInfoModalLabel' },
                'Chat Info'
              ),
              React.createElement(
                'button',
                { type: 'button', className: 'close', id: 'hide-chat-info-modal-button', 'aria-label': 'Close' },
                React.createElement(
                  'span',
                  { 'aria-hidden': 'true' },
                  '\xD7'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'modal-body' },
              React.createElement(ActiveUsersDiv, { ref: function ref(activeUsersDivComponent) {
                  window.activeUsersDivComponent = activeUsersDivComponent;
                } }),
              React.createElement(
                'div',
                { className: 'custom-control custom-switch mt-2' },
                React.createElement('input', { type: 'checkbox', className: 'custom-control-input', id: 'ghostModeSwitch' }),
                React.createElement(
                  'label',
                  { className: 'custom-control-label', htmlFor: 'ghostModeSwitch' },
                  'Ghost Mode'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ChatInfoModal;
}(React.Component);

// <ActiveUsersDiv ref={(activeUsersDivComponent) => {window.activeUsersDivComponent = activeUsersDivComponent}} />


var NewChatModal = function (_React$Component3) {
  _inherits(NewChatModal, _React$Component3);

  function NewChatModal() {
    _classCallCheck(this, NewChatModal);

    return _possibleConstructorReturn(this, (NewChatModal.__proto__ || Object.getPrototypeOf(NewChatModal)).apply(this, arguments));
  }

  _createClass(NewChatModal, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'modal fade', id: 'exampleModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true' },
        React.createElement(
          'div',
          { className: 'modal-dialog' },
          React.createElement(
            'div',
            { className: 'modal-content' },
            React.createElement(
              'div',
              { className: 'modal-header' },
              React.createElement(
                'h5',
                { className: 'modal-title', id: 'exampleModalLabel' },
                'New Chat'
              ),
              React.createElement(
                'button',
                { type: 'button', className: 'close', id: 'hide-modal-button', 'aria-label': 'Close' },
                React.createElement(
                  'span',
                  { 'aria-hidden': 'true' },
                  '\xD7'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'modal-body' },
              React.createElement('input', { type: 'text', className: 'form-control mb-2', placeholder: 'Chat Name', autoComplete: 'off', id: 'chat-name-input', defaultValue: '' }),
              React.createElement(
                'div',
                { className: 'autocomplete', style: { width: "100%" } },
                React.createElement('input', { className: 'form-control', id: 'chat-user-names-input', type: 'text', placeholder: 'User Name', defaultValue: '' })
              ),
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-outline-primary w-100 mt-1', id: 'chat-add-user-name-button' },
                'Add User'
              ),
              React.createElement(UsersDiv, { ref: function ref(usersDivComponent) {
                  window.usersDivComponent = usersDivComponent;
                } })
            ),
            React.createElement(
              'div',
              { className: 'modal-footer' },
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-primary', id: 'create-chat-modal-button' },
                'Create Chat'
              )
            )
          )
        )
      );
    }
  }]);

  return NewChatModal;
}(React.Component);

// <input id="tags"></input>

var MainDiv = function (_React$Component4) {
  _inherits(MainDiv, _React$Component4);

  function MainDiv(props) {
    _classCallCheck(this, MainDiv);

    return _possibleConstructorReturn(this, (MainDiv.__proto__ || Object.getPrototypeOf(MainDiv)).call(this, props));
  }

  _createClass(MainDiv, [{
    key: 'render',
    value: function render() {
      var messageIds = this.props.messageIds;
      var messageSenders = this.props.messageSenders;
      var messageTexts = this.props.messageTexts;
      return React.createElement(
        'div',
        { id: 'main-div', className: 'd-none' },
        React.createElement(
          'div',
          { className: 'container-fluid m-0 p-0 w-100' },
          React.createElement(
            'div',
            { className: 'row m-0 p-0 w-100' },
            React.createElement(
              'div',
              { className: 'col-3 p-0 m-0' },
              React.createElement(NavigationDiv, { chatNames: this.props.chatNames, chatIds: this.props.chatIds, getMessages: this.props.getMessages })
            ),
            React.createElement(
              'div',
              { className: 'col-9 p-0 m-0' },
              React.createElement(MainMessagesDiv, { messageIds: messageIds, messageSenders: messageSenders, messageTexts: messageTexts, chatName: this.props.chatName })
            )
          )
        )
      );
    }
  }]);

  return MainDiv;
}(React.Component);

var NavigationDiv = function (_React$Component5) {
  _inherits(NavigationDiv, _React$Component5);

  function NavigationDiv(props) {
    _classCallCheck(this, NavigationDiv);

    return _possibleConstructorReturn(this, (NavigationDiv.__proto__ || Object.getPrototypeOf(NavigationDiv)).call(this, props));
  }

  _createClass(NavigationDiv, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'p-1 bg-dark rounded mr-1 border border-white', style: { height: "calc(100vh - 10px)" } },
        React.createElement(
          'div',
          { id: 'navigation-div', className: 'pr-1 h-100', style: { overflowX: "hidden" } },
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary w-100 mb-1', id: 'new-chat-button' },
            'New Chat'
          ),
          React.createElement(ChatsDiv, { chatNames: this.props.chatNames, chatIds: this.props.chatIds, getMessages: this.props.getMessages })
        )
      );
    }
  }]);

  return NavigationDiv;
}(React.Component);

var ChatsDiv = function (_React$Component6) {
  _inherits(ChatsDiv, _React$Component6);

  function ChatsDiv(props) {
    _classCallCheck(this, ChatsDiv);

    return _possibleConstructorReturn(this, (ChatsDiv.__proto__ || Object.getPrototypeOf(ChatsDiv)).call(this, props));
  }

  _createClass(ChatsDiv, [{
    key: 'getChatsList',
    value: function getChatsList(chatNames, chatIds) {
      var _this7 = this;

      var chatsList = chatIds.map(function (chatId, index) {
        return React.createElement(
          'button',
          { type: 'button', className: 'list-group-item w-100 list-group-item-secondary', onClick: function onClick() {
              return _this7.props.getMessages(chatId);
            }, key: index, style: { wordBreak: "break-all" } },
          chatNames[index]
        );
      });
      return chatsList;
    }
  }, {
    key: 'render',
    value: function render() {
      var chatsList = this.getChatsList(this.props.chatNames, this.props.chatIds);
      return React.createElement(
        'div',
        { className: 'list-group' },
        chatsList
      );
    }
  }]);

  return ChatsDiv;
}(React.Component);

var UsersDiv = function (_React$Component7) {
  _inherits(UsersDiv, _React$Component7);

  function UsersDiv(props) {
    _classCallCheck(this, UsersDiv);

    var _this8 = _possibleConstructorReturn(this, (UsersDiv.__proto__ || Object.getPrototypeOf(UsersDiv)).call(this, props));

    _this8.updateUserNamesState = _this8.updateUserNamesState.bind(_this8);

    _this8.state = {
      userNames: []
    };
    return _this8;
  }

  _createClass(UsersDiv, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateUserNamesState();
    }
  }, {
    key: 'getUsersList',
    value: function getUsersList(userNames) {
      var usersList = userNames.map(function (userName, index) {
        return React.createElement(
          'button',
          { type: 'button', className: 'list-group-item w-100', key: index },
          userName
        );
      });
      return usersList;
    }
  }, {
    key: 'updateUserNamesState',
    value: function updateUserNamesState() {
      this.setState({
        userNames: CHAT_USER_NAMES
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var usersList = this.getUsersList(this.state.userNames);
      return React.createElement(
        'div',
        { className: 'list-group mt-1' },
        usersList
      );
    }
  }]);

  return UsersDiv;
}(React.Component);

// <button type="button" className="list-group-item list-group-item-dark active" onClick={() => this.props.getMessages('-M9-EgOsNsUynElII_wa')}>Cras justo odio</button>
// <button type="button" className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span className="badge badge-primary badge-pill ml-2">14</span></button>
// <button type="button" className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">Morbi leo risus<span className="badge badge-primary badge-pill ml-2">3</span></button>
// <button type="button" className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">Porta ac consectetur ac<span className="badge badge-primary badge-pill ml-2">4</span></button>

var TypingUserDiv = function (_React$Component8) {
  _inherits(TypingUserDiv, _React$Component8);

  function TypingUserDiv(props) {
    _classCallCheck(this, TypingUserDiv);

    var _this9 = _possibleConstructorReturn(this, (TypingUserDiv.__proto__ || Object.getPrototypeOf(TypingUserDiv)).call(this, props));

    _this9.updateTypingText = _this9.updateTypingText.bind(_this9);

    _this9.state = {
      typingText: ''
    };
    return _this9;
  }

  _createClass(TypingUserDiv, [{
    key: 'updateTypingText',
    value: function updateTypingText(newTypingText) {
      this.setState({
        typingText: newTypingText
      });
    }

    // {this.state.typingText}

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'typing-user-div', className: 'd-inline-block bg-white p-0 pr-1 pl-1 mb-0 position-absolute float-left text-muted small invisible rounded', style: { bottom: "52px" } },
        this.state.typingText
      );
    }
  }]);

  return TypingUserDiv;
}(React.Component);

// <textarea className="form-control w-100" placeholder="Enter Message Here..." id="message-text-text-area" style={{resize: "none"}}></textarea>

var ComposeMessageDiv = function (_React$Component9) {
  _inherits(ComposeMessageDiv, _React$Component9);

  function ComposeMessageDiv() {
    _classCallCheck(this, ComposeMessageDiv);

    return _possibleConstructorReturn(this, (ComposeMessageDiv.__proto__ || Object.getPrototypeOf(ComposeMessageDiv)).apply(this, arguments));
  }

  _createClass(ComposeMessageDiv, [{
    key: 'render',
    value: function render() {
      // rounded bg-white p-2
      return React.createElement(
        'div',
        { className: 'mb-1 position-absolute w-100 pr-1', style: { bottom: "0px" } },
        React.createElement(
          'div',
          { className: 'container-fluid p-0 pr-1' },
          React.createElement(
            'div',
            { className: 'row m-0 p-0 w-100' },
            React.createElement(
              'div',
              { className: 'col-9 p-0 m-0' },
              React.createElement('input', { type: 'text', className: 'form-control w-100 h-100', placeholder: 'Enter Message Here...', id: 'message-text-text-area', style: { resize: "none" } })
            ),
            React.createElement(
              'div',
              { className: 'col-1 p-0 m-0 pl-1' },
              React.createElement(
                'button',
                { className: 'w-100 btn btn-secondary', id: 'emoji-button' },
                '\uD83D\uDE00'
              )
            ),
            React.createElement(
              'div',
              { className: 'col-2 m-0 pl-1', style: { paddingRight: "2px" } },
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-primary w-100', id: 'send-button' },
                'Send'
              )
            )
          )
        )
      );
    }
  }]);

  return ComposeMessageDiv;
}(React.Component);

var MainMessagesDiv = function (_React$Component10) {
  _inherits(MainMessagesDiv, _React$Component10);

  function MainMessagesDiv(props) {
    _classCallCheck(this, MainMessagesDiv);

    return _possibleConstructorReturn(this, (MainMessagesDiv.__proto__ || Object.getPrototypeOf(MainMessagesDiv)).call(this, props));
  }

  _createClass(MainMessagesDiv, [{
    key: 'render',
    value: function render() {
      var messageIds = this.props.messageIds;
      var messageSenders = this.props.messageSenders;
      var messageTexts = this.props.messageTexts;
      var chatName = this.props.chatName;
      console.log('chatName');
      console.log(chatName);

      if (chatName == '') {
        chatName = 'SELECT A CHAT';
      }

      // <div className="bg-white border border-dark text-left p-1 rounded w-100 pl-2">
      //   {chatName}
      // </div>

      return React.createElement(
        'div',
        { id: 'main-messages-div', className: 'bg-dark p-1 rounded h-100 border border-white' },
        React.createElement(
          'div',
          { className: 'container-fluid p-0' },
          React.createElement(
            'div',
            { className: 'row m-0 p-0 w-100' },
            React.createElement(
              'div',
              { className: 'col-10 p-0 m-0' },
              React.createElement('input', { type: 'text', className: 'form-control', autoComplete: 'off', id: 'current-chat-name-input', placeholder: chatName })
            ),
            React.createElement(
              'div',
              { className: 'col-2 p-0 m-0 pl-1' },
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-secondary w-100 text-white p-auto position-relative', id: 'chat-info-button', style: { height: "38px" } },
                'Info'
              )
            )
          )
        ),
        React.createElement(MessagesDiv, { ref: function ref(messagesDivComponent) {
            window.messagesDivComponent = messagesDivComponent;
          }, messageIds: messageIds, messageTexts: messageTexts, messageSenders: messageSenders }),
        React.createElement(TypingUserDiv, { ref: function ref(typingUserDivComponent) {
            window.typingUserDivComponent = typingUserDivComponent;
          } }),
        React.createElement(ComposeMessageDiv, null)
      );
    }
  }]);

  return MainMessagesDiv;
}(React.Component);

var LoginUserDiv = function (_React$Component11) {
  _inherits(LoginUserDiv, _React$Component11);

  function LoginUserDiv(props) {
    _classCallCheck(this, LoginUserDiv);

    return _possibleConstructorReturn(this, (LoginUserDiv.__proto__ || Object.getPrototypeOf(LoginUserDiv)).call(this, props));
  }

  _createClass(LoginUserDiv, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'login-user-div', className: 'container-fluid bg-white p-2 mb-1 rounded' },
        React.createElement('input', { type: 'text', className: 'form-control mb-1', placeholder: 'Email', autoComplete: 'off', id: 'login-email-input', defaultValue: '' }),
        React.createElement('input', { type: 'password', className: 'form-control mb-2', placeholder: 'Password', autoComplete: 'off', id: 'login-password-input', defaultValue: '' }),
        React.createElement(
          'button',
          { className: 'btn btn-primary btn-block', id: 'login-button' },
          'Login'
        )
      );
    }
  }]);

  return LoginUserDiv;
}(React.Component);

var CreateUserDiv = function (_React$Component12) {
  _inherits(CreateUserDiv, _React$Component12);

  function CreateUserDiv(props) {
    _classCallCheck(this, CreateUserDiv);

    return _possibleConstructorReturn(this, (CreateUserDiv.__proto__ || Object.getPrototypeOf(CreateUserDiv)).call(this, props));
  }

  _createClass(CreateUserDiv, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'create-user-div', className: 'container-fluid bg-white p-2 mb-1 rounded' },
        React.createElement('input', { type: 'text', className: 'form-control mb-1', placeholder: 'Full Name', autoComplete: 'off', id: 'create-user-name-input' }),
        React.createElement('input', { type: 'text', className: 'form-control mb-1', placeholder: 'Email', autoComplete: 'off', id: 'create-user-email-input' }),
        React.createElement('input', { type: 'password', className: 'form-control mb-2', placeholder: 'Password', autoComplete: 'off', id: 'create-user-password-input' }),
        React.createElement(
          'button',
          { className: 'btn btn-primary btn-block', id: 'create-user-button' },
          'Create Account'
        )
      );
    }
  }]);

  return CreateUserDiv;
}(React.Component);

var MessageDiv = function (_React$Component13) {
  _inherits(MessageDiv, _React$Component13);

  function MessageDiv(props) {
    _classCallCheck(this, MessageDiv);

    var _this14 = _possibleConstructorReturn(this, (MessageDiv.__proto__ || Object.getPrototypeOf(MessageDiv)).call(this, props));

    _this14.makeVisible = _this14.makeVisible.bind(_this14);
    _this14.makeInvisible = _this14.makeInvisible.bind(_this14);
    return _this14;
  }

  _createClass(MessageDiv, [{
    key: 'makeVisible',
    value: function makeVisible(e) {
      $(e.currentTarget).css("filter", "blur(0px)");
    }
  }, {
    key: 'makeInvisible',
    value: function makeInvisible(e) {
      if (this.props.isGhostMode) {
        $(e.currentTarget).css("filter", "blur(3.5px)");
      } else {
        $(e.currentTarget).css("filter", "blur(0px)");
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var nextSender = this.props.nextSender;
      var sender = this.props.sender;
      var text = this.props.text;
      var messageId = this.props.messageId;
      var lastSeenMessageId = this.props.lastSeenMessageId;

      var divClassText = '';
      var labelClassText = 'd-inline-flex p-1 rounded pl-2 pr-2 text-white m-0 text-break';
      var senderLabelClassText = 'd-inline-flex p-0 rounded text-white m-0 text-break bg-white mt-1 text-muted small pl-1 pr-1';
      var seenLabelClassText = 'd-inline-flex p-0 rounded text-white m-0 text-break bg-secondary mt-1 small pl-1 pr-1';
      var labelStyle = { wordBreak: "break-all" };

      // mr-1

      if (sender == USER.id) {

        // labelClassText += ' bg-warning text-dark';
        // bg-primary
        labelClassText += ' float-right self-message-div';
        senderLabelClassText += ' float-right';
        seenLabelClassText += ' float-right';
        divClassText += 'float-right ml-5';
        labelStyle["backgroundColor"] = SELF_COLOR;
      } else {

        // labelClassText += ' bg-info text-dark';
        // bg-secondary
        labelClassText += ' float-left other-message-div';
        senderLabelClassText += ' float-left';
        seenLabelClassText += ' float-left';
        divClassText += 'float-left mr-5';
        labelStyle["backgroundColor"] = OTHER_COLOR;
      }

      /*    console.log(' - -- -- -  -- - - - - - - - -- - - - - - -- ');
          console.log('CHAT_USERS_DICT');
          console.log(CHAT_USERS_DICT);
          console.log(sender);
          console.log(sender in CHAT_USERS_DICT);
          console.log(CHAT_USERS_DICT[sender]['name'])
          console.log(' - -- -- -  -- - - - - - - - -- - - - - - -- ');*/

      // if (isShown) {
      //   divClassText += 'invisible';
      // }

      var senderDivClassText = divClassText + " d-block w-100";

      var senderName = 'ERROR';
      if (sender in CHAT_USERS_DICT) {
        senderName = CHAT_USERS_DICT[sender]['name'];
      }

      var senderDiv = React.createElement(
        'div',
        { className: 'w-100 d-inline-block m-0 p-0' },
        React.createElement(
          'label',
          { className: senderLabelClassText, style: { wordBreak: "break-all" } },
          senderName
        )
      );

      if (sender == nextSender) {
        senderDiv = null;
      }

      var styleText = {};
      if (this.props.isGhostMode) {
        styleText = { filter: "blur(3.5px)", transitionDuration: "0.1s" };
      }

      var seenDiv = null;
      // if (lastSeenMessageId == messageId) {
      //   seenDiv = (
      //     <div className="w-100 d-inline-block mt-0 p-0">
      //       <label className={seenLabelClassText} style={{wordBreak: "break-all"}}>seen</label>
      //     </div>
      //   );
      // }

      // dangerouslySetInnerHTML={{__html: text}}

      return React.createElement(
        'div',
        { className: divClassText, onMouseEnter: this.makeVisible, onMouseLeave: this.makeInvisible, style: styleText },
        React.createElement(
          'div',
          { className: 'w-100 p-0 m-0' },
          React.createElement(
            'label',
            { className: labelClassText, style: labelStyle },
            text
          )
        ),
        senderDiv,
        seenDiv
      );
    }
  }]);

  return MessageDiv;
}(React.Component);

var MessagesDiv = function (_React$Component14) {
  _inherits(MessagesDiv, _React$Component14);

  function MessagesDiv(props) {
    _classCallCheck(this, MessagesDiv);

    var _this15 = _possibleConstructorReturn(this, (MessagesDiv.__proto__ || Object.getPrototypeOf(MessagesDiv)).call(this, props));

    _this15.getMessagesList = _this15.getMessagesList.bind(_this15);
    _this15.updateIsGhostModeState = _this15.updateIsGhostModeState.bind(_this15);

    _this15.state = {
      isGhostMode: false,
      lastSeenMessageId: ''
    };
    return _this15;
  }

  _createClass(MessagesDiv, [{
    key: 'updateIsGhostModeState',
    value: function updateIsGhostModeState(isGhostMode) {
      this.setState({
        isGhostMode: isGhostMode
      });
    }
  }, {
    key: 'updateLastSeenMessageIdState',
    value: function updateLastSeenMessageIdState(lastSeenMessageId) {
      this.setState({
        lastSeenMessageId: lastSeenMessageId
      });
    }
  }, {
    key: 'getMessagesList',
    value: function getMessagesList(messageIds, messageTexts, messageSenders, isGhostMode, lastSeenMessageId) {
      // <label>&nbsp;</label>
      var messagesList = messageTexts.map(function (text, index) {
        return React.createElement(
          'div',
          { key: index },
          React.createElement(
            'div',
            { className: 'container-fluid p-0 d-inline-block' },
            React.createElement(MessageDiv, { isGhostMode: isGhostMode, sender: messageSenders[index], nextSender: messageSenders[index + 1], messageId: messageIds[index], lastSeenMessageId: lastSeenMessageId, text: text })
          ),
          lastSeenMessageId == messageIds[index] && React.createElement(
            'div',
            { className: 'w-100 m-0 p-0 align-items-center text-center' },
            React.createElement(
              'label',
              { className: 'd-inline-block p-0 rounded text-white m-0 text-break bg-secondary small position-relative pr-1 pl-1', style: { wordBreak: "break-all", bottom: "6px" } },
              'Seen'
            )
          )
        );
      });

      return messagesList;
    }

    // <label className=''>{messageSenders[index]}</label>

  }, {
    key: 'render',
    value: function render() {
      var messagesList = this.getMessagesList(this.props.messageIds, this.props.messageTexts, this.props.messageSenders, this.state.isGhostMode || IS_GHOST_MODE, this.state.lastSeenMessageId);
      // <div className="container-fluid bg-dark rounded p-1 mt-1 mb-1 border border-white">
      return React.createElement(
        'div',
        { id: 'messages-div', className: 'overflow-auto position-absolute pr-0', style: { height: "calc(100vh - 102px)", top: "46px", width: "calc(100% - 10px)" } },
        React.createElement(
          'div',
          { className: 'container-fluid m-0 p-0 pr-1' },
          messagesList
        )
      );
    }
  }]);

  return MessagesDiv;
}(React.Component);

var App = function (_React$Component15) {
  _inherits(App, _React$Component15);

  function App() {
    _classCallCheck(this, App);

    var _this16 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this16.chatNames = [];
    _this16.chatIds = [];

    _this16.getChatInfo = _this16.getChatInfo.bind(_this16);
    _this16.getMessages = _this16.getMessages.bind(_this16);
    _this16.getChats = _this16.getChats.bind(_this16);

    // this.database = database.ref().child('messages');

    // firebase.analytics();

    _this16.state = {
      messageIds: [],
      messageTexts: [],
      messageSenders: [],
      chatNames: [],
      chatIds: [],
      chatName: ''
    };
    return _this16;
  }

  // getMessages(chatId) {

  //   this.database = database.ref().child('messages');
  //   this.database.on('value', snap => {

  //     const messages = snap.val();

  //     let messageTexts = [];
  //     let messageSenders = [];
  //     for (const [key, value] of Object.entries(messages)) {
  //       messageTexts.push(value.text);
  //       messageSenders.push(value.sender);
  //     }

  //     this.setState({
  //       messageTexts: messageTexts,
  //       messageSenders: messageSenders
  //     });

  //     scrollToBottom();
  //   })
  // }

  _createClass(App, [{
    key: 'getChatInfo',
    value: function getChatInfo(chatId) {
      var _this17 = this;

      var didDo = false;

      this.database = database.ref().child('chats').child(chatId).child('info');
      // this.database.off();

      // this.database.once('value').then(function(snapshot) {
      //   // const chats = snap.val();
      //   // for (const [key, value] of Object.entries(chats)) {
      //   //   // CHAT_INFO[snap.key] = {name: value.info.name};
      //   //   chatNames.push(value.info.name);
      //   // }

      //   console.log('this.chatNames');
      //   console.log(this.chatNames);

      //   this.chatNames.push(snapshot.val().name);

      //   console.log('heree');
      //   console.log(this.chatNames);

      //   // let chatNames = [];
      //   // for (const [key, value] of Object.entries(CHAT_INFO)) {
      //   //   chatNames.push(value.name);
      //   // }

      //   this.setState({
      //     chatNames: this.chatNames
      //   });
      // });

      this.database.on('value', function (snap) {

        // const chats = snap.val();
        // for (const [key, value] of Object.entries(chats)) {
        //   // CHAT_INFO[snap.key] = {name: value.info.name};
        //   chatNames.push(value.info.name);
        // }

        if (!didDo) {

          didDo = true;

          _this17.chatNames.push(snap.val().name);

          console.log('heree');
          console.log(_this17.chatNames);

          // let chatNames = [];
          // for (const [key, value] of Object.entries(CHAT_INFO)) {
          //   chatNames.push(value.name);
          // }

          _this17.setState({
            chatNames: _this17.chatNames
          });
        }
      });
    }
  }, {
    key: 'getMessages',
    value: function getMessages(chatId) {
      var _this18 = this;

      CHAT_ID = chatId;

      updateChatUsersDict1(chatId);

      this.database = database.ref().child('chats').child(chatId).child('messages');
      this.database.off();
      this.database.on('value', function (snap) {

        var messageIds = [];
        var messageTexts = [];
        var messageSenders = [];

        if (snap.exists()) {
          var messages = snap.val();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Object.entries(messages)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _ref3 = _step2.value;

              var _ref4 = _slicedToArray(_ref3, 2);

              var key = _ref4[0];
              var value = _ref4[1];

              messageIds.push(key);
              messageTexts.push(value.text);
              messageSenders.push(value.sender);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        LAST_MESSAGE = messageIds[messageIds.length - 1];

        if (IS_ON_PAGE) {
          updateUserLastRead(USER.id, chatId, LAST_MESSAGE);
        }

        _this18.setState({
          messageIds: messageIds,
          messageTexts: messageTexts,
          messageSenders: messageSenders
        });

        scrollToBottom();
      });

      this.database = database.ref().child('chats').child(chatId).child('info');
      this.database.off();
      this.database.on('value', function (snap) {

        console.log('LLLLLLLLLLLLLLLLLL');

        var chatName = snap.val().name;

        _this18.setState({
          chatName: chatName
        });

        _this18.getChats(USER.id);

        // console.log('this_chatIds');
        // console.log(this.chatIds.length);

        // this.chatNames = [];

        // for (var i = 0; i < this.chatIds.length; i++) {

        //   let chatId = this.chatIds[i];
        //   console.log('1111111111111111111111111111111111111111');
        //   console.log(chatId);

        //   this.getChatInfo(chatId);


        // }

      });
    }
  }, {
    key: 'getChats',
    value: function getChats(userId) {
      var _this19 = this;

      this.database = database.ref().child('users').child(userId).child('chats');
      this.database.on('value', function (snap) {

        _this19.chatNames = [];
        _this19.chatIds = [];

        if (snap.exists()) {

          console.log('countcountcount');

          var chats = snap.val();
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = Object.entries(chats)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _ref5 = _step3.value;

              var _ref6 = _slicedToArray(_ref5, 2);

              var key = _ref6[0];
              var value = _ref6[1];

              _this19.chatIds.push(key);
              _this19.getChatInfo(key);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          console.log('lastcountlastcount');

          // if (CHAT_ID == '') {
          //   this.getMessages(chatIds[0]);
          // }

          console.log('chatNames_chatNames');
          console.log(_this19.chatNames);
        }

        _this19.setState({
          chatIds: _this19.chatIds
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(NewChatModal, null),
        React.createElement(ChatInfoModal, { ref: function ref(chatInfoModalComponent) {
            window.chatInfoModalComponent = chatInfoModalComponent;
          } }),
        React.createElement(LoginUserDiv, { getChats: this.getChats }),
        React.createElement(CreateUserDiv, { getChats: this.getChats }),
        React.createElement(MainDiv, { messageIds: this.state.messageIds, messageSenders: this.state.messageSenders, messageTexts: this.state.messageTexts, chatNames: this.state.chatNames, chatIds: this.state.chatIds, getMessages: this.getMessages, chatName: this.state.chatName })
      );

      // return (
      //   <div>
      //     <MainMessagesDiv messageSenders={this.state.messageSenders} messageTexts={this.state.messageTexts} />
      //   </div>
      // );

      // return (
      //   <div style={{display: "flex", flexFlow: "column", height: "100%"}}>
      //     <LoginUserDiv />
      //     <CreateUserDiv />
      //     <input type="text" className="form-control mb-1" placeholder="Display Name" autoComplete="off" id="message-sender-input"></input>
      //     <MainMessagesDiv messageSenders={this.state.messageSenders} messageTexts={this.state.messageTexts} />
      //   </div>
      // );
    }
  }]);

  return App;
}(React.Component);

// <MessagesDiv messages={this.state.messages}/>
// <h3>{this.state.messages}</h3>

// var messages = {};

ReactDOM.render(React.createElement(App, { ref: function ref(ourComponent) {
    window.ourComponent = ourComponent;
  } }), document.getElementById('root'));

// function writeMessage(sender, text) {
//   database.ref('messages/').push({
//     sender: sender,
//     text: text
//   });
//   $("#message-text-text-area").val('');
//   textAreaAdjust(document.getElementById('message-text-text-area'));
// }

$("#chat-info-button").click(function () {
  window.activeUsersDivComponent.updateActiveUserNamesState();
  $("#chatInfoModal").modal("show");
});

$("#hide-chat-info-modal-button").click(function () {
  $("#chatInfoModal").modal("hide");
});

function handleSend() {
  // const sender = $("#message-sender-input").val();
  var sender = USER.id;
  var text = $("#message-text-text-area").val().trim();
  var timestamp = Date.now();
  if (sender != '' && text != '' && CHAT_ID != '') {
    // writeMessage(sender, text);
    writeMessage(sender, text, timestamp, CHAT_ID);
  }
}

$("#send-button").click(function () {
  handleSend();
});

function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = 2 + o.scrollHeight + "px";
}

// $('#message-div').on('hover', function() {
//   console.log('hello');
//   $('#message-div').removeClass('visible');
//   $('#message-div').addClass('invisible');
//   $(this).removeClass('invisible');
//   $(this).addClass('visible');
// });

// $('#current-chat-name-input').on('input', function() {
//   console.log($('#current-chat-name-input').val());
//   updateChatName(CHAT_ID, $('#current-chat-name-input').val());
// });

$('#current-chat-name-input').on('focusin', function () {
  if ($('#current-chat-name-input').val() == '') {
    $('#current-chat-name-input').val($('#current-chat-name-input').attr('placeholder'));
  }
});

$('#current-chat-name-input').on('focusout', function () {
  if ($('#current-chat-name-input').val() == '') {
    $('#current-chat-name-input').val($('#current-chat-name-input').attr('placeholder'));
  } else {
    updateChatName(CHAT_ID, $('#current-chat-name-input').val());
  }
  $('#current-chat-name-input').val('');
});

$('#message-text-text-area').on('input', function () {

  var text = $("#message-text-text-area").val();
  if (text == '') {
    $("#message-text-text-area").addClass('disabled');
  } else {
    $("#message-text-text-area").removeClass('disabled');
  }

  if ($("#message-text-text-area").val().trim() == '') {
    $("#message-text-text-area").val('');
  }

  updateUserTyping(USER.id, CHAT_ID);

  // textAreaAdjust(this);
});

var delay = function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}();

$('#message-text-text-area').on('keyup', function () {
  console.log('KEY YUPPPPPPP');
  delay(function () {
    updateUserTyping(USER.id, '');
  }, 1000);
});

function readSetUserData(email) {
  database.ref().child("users").orderByChild("email").equalTo(email).once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      USER.id = childSnapshot.key;
      USER.name = childSnapshot.val().name;
      USER.email = childSnapshot.val().email;
    });
  }).then(function (user) {
    window.ourComponent.getChats(USER.id);
    updateUserActive(USER.id, true);
    // window.ourComponent.getChatInfo(USER.id);
  });
}

function updateChatUsersDict1(chatId) {

  database.ref().child('chats').child(chatId).child('users').off();
  database.ref().child('chats').child(chatId).child('users').on('value', function (snap) {

    var userIds = [];
    var lastReadMessageIds = [];

    if (snap.exists()) {
      var users = snap.val();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.entries(users)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _ref7 = _step4.value;

          var _ref8 = _slicedToArray(_ref7, 2);

          var key = _ref8[0];
          var value = _ref8[1];

          userIds.push(key);
          lastReadMessageIds.push(value.last_read);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }

    console.log('lastReadMessageIds');
    console.log(lastReadMessageIds);

    CHAT_USERS_DICT = {};

    // $('.seen-message').removeClass('d-block');
    // $('.seen-message').addClass('d-none');

    for (var i = 0; i < userIds.length; i++) {

      updateChatUsersDict2(userIds[i], lastReadMessageIds[i]);
    }
  });

  // database.ref().child("chats").equalTo(chatId).on("value", function (snapshot) {

  //   let userIds = [];

  //   console.log('snapshot');
  //   console.log(snapshot.child("users"));

  //   snapshot.forEach(function(childSnapshot) {
  //     console.log('pppppppp');
  //     console.log(childSnapshot);
  //     userIds.push(childSnapshot.key);
  //   });


  //   CHAT_USERS_DICT = {};

  //   for (let i = 0; i < userIds.length; i++) {


  //     updateChatUsersDict2(userIds[i]);


  //   }


  // });

}

function updateChatUsersDict2(userId, lastReadMessageId) {

  database.ref().child("users").child(userId).off();
  database.ref().child("users").child(userId).on("value", function (snapshot) {

    if (snapshot.exists()) {

      id = snapshot.key;
      name = snapshot.val().name;
      email = snapshot.val().email;
      isActive = snapshot.val().is_active;
      isTyping = snapshot.val().is_typing;

      CHAT_USERS_DICT[id] = {
        name: name,
        email: email,
        isActive: isActive,
        isTyping: isTyping,
        lastRead: lastReadMessageId
      };

      console.log(CHAT_USERS_DICT);
      console.log('aaaaaaaaa');

      if (id != USER.id) {
        window.messagesDivComponent.updateLastSeenMessageIdState(lastReadMessageId);
      }

      // if (id != USER.id) {
      //   // $('#' + lastReadMessageId).removeClass('d-none');
      //   // $('#' + lastReadMessageId).addClass('d-block');
      // }
    }
  });
}

$(window).bind('beforeunload', function () {
  updateUserActive(USER.id, false);
  updateUserTyping(USER.id, '');
});

function updateUserActive(userId, isActive) {
  if (userId != '') {
    database.ref('users/' + userId).update({
      is_active: isActive
    });
  }
}

function updateUserTyping(userId, chatId) {
  if (userId != '') {
    database.ref('users/' + userId).update({
      is_typing: chatId
    });
  }
}

function updateUserLastRead(userId, chatId, lastReadMessageId) {
  if (userId != '' && chatId != '') {
    database.ref('chats/' + chatId + '/users/' + userId).update({
      last_read: lastReadMessageId
    });
  }
}

function updateChatName(chatId, chatName) {
  if (chatId != '') {
    database.ref('chats/' + chatId + '/info').update({
      name: chatName
    });
  }
}

function handleSignIn(email) {

  readSetUserData(email);
  // USER.email = email;

  $("#login-user-div").addClass('d-none');
  $("#create-user-div").addClass('d-none');
  $("#main-div").removeClass('d-none');

  // textAreaAdjust(document.getElementById('message-text-text-area'));
  scrollToBottom();
}

function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {

    // User signed in.

    handleSignIn(email);
  }).catch(function (error) {

    // Handle Errors here.

    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

$("#login-button").click(function () {
  var email = $("#login-email-input").val();
  var password = $("#login-password-input").val();
  if (email != '' && password != '') {

    // REAL ONE

    loginUser(email, password);

    // FAKE ONE

    // handleSignIn(email);

  }
});

$('#message-text-text-area').keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == '13') {
    handleSend();
  }
});

function writeUser(name, email) {
  database.ref('users/').push({
    email: email,
    name: name,
    is_active: false
  });
}

function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {

    // User signed in.

    handleSignIn(email);
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

$("#create-user-button").click(function () {
  var name = $("#create-user-name-input").val();
  var email = $("#create-user-email-input").val();
  var password = $("#create-user-password-input").val();
  if (email != '' && password != '') {
    writeUser(name, email);
    createUser(email, password);
  }
});

function writeChat(name, admin, userIdsDict) {
  console.log('WRITE CHAT');
  var chatRef = database.ref('chats/').push({
    info: {
      name: name,
      admin: admin
    },
    users: userIdsDict
  }).then(function (snap) {

    var chatId = snap.key;

    database.ref('users/' + USER.id + '/chats/').update(_defineProperty({}, chatId, {
      last_read: ''
    }));

    for (userId in userIdsDict) {
      database.ref('users/' + userId + '/chats/').update(_defineProperty({}, chatId, {
        last_read: ''
      }));
    }

    $("#exampleModal").modal("hide");
  });
}

function writeMessage(sender, text, timestamp, chatId) {

  database.ref('chats/' + chatId + '/messages/').push({

    sender: sender,
    text: text,
    timestamp: timestamp

  }).then(function () {

    // sent

  });

  $("#message-text-text-area").val('');
  // textAreaAdjust(document.getElementById('message-text-text-area'));
  updateUserTyping(USER.id, '');
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(function (key) {
    return object[key].name === value;
  });
}

function resetNewChatModal() {
  $("#chat-name-input").val('');
  CHAT_USER_NAMES = [];
  window.usersDivComponent.updateUserNamesState();
  $("#chat-user-names-input").val('');
}

$("#create-chat-modal-button").click(function () {
  var name = $("#chat-name-input").val();

  var userIdsDict = {};
  userIdsDict[USER.id] = 0;
  for (var i = 0; i < CHAT_USER_NAMES.length; i++) {
    var _userId = getKeyByValue(ALL_USERS_DICT, CHAT_USER_NAMES[i]);
    userIdsDict[_userId] = 0;
  }

  console.log('PROBLEM_HGERE');
  console.log(CHAT_USER_NAMES);
  console.log(ALL_USERS_DICT);

  if (name != '' && userIdsDict != {}) {
    writeChat(name, USER.id, userIdsDict);
  }

  // resetNewChatModal();
});

$("#new-chat-button").click(function () {
  resetNewChatModal();
  $("#exampleModal").modal("show");
});

$("#hide-modal-button").click(function () {
  $("#exampleModal").modal("hide");
  // resetNewChatModal();
});

// $(".chat-button").click(function() {
//   console.log('HELLOE');
//   $(".chat-button").removeClass('active');
//   $(this).addClass('active');
// });

$('#ghostModeSwitch').change(function () {
  IS_GHOST_MODE = $(this).is(":checked");
  window.messagesDivComponent.updateIsGhostModeState(IS_GHOST_MODE);
  // window.chatInfoModalComponent.updateIsGhostModeState(IS_GHOST_MODE);
  $('#ghostModeSwitch').prop('checked', IS_GHOST_MODE);
});

// textAreaAdjust(document.getElementById('message-text-text-area'));


// $().on('mouseover', function() {
//   console.log('mouseoevr');
// });


$(document).mouseenter(function () {
  console.log('ENTER');
  IS_ON_PAGE = true;
  updateUserLastRead(USER.id, CHAT_ID, LAST_MESSAGE);
});

$(document).mouseleave(function () {
  console.log('LEAVE');
  IS_ON_PAGE = false;
});

// function readSetUserData(email) {
//   database.ref().child("users").orderByChild("name").equalTo(name).once("value", function (snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       USER.id = childSnapshot.key;
//       USER.name = childSnapshot.val().name;
//     });
//   }).then(function(user) {
//     window.ourComponent.getChats(USER.id);
//     // window.ourComponent.getChatInfo(USER.id);
//   });
// }


// $( function() {
//     var availableTags = [
//       "ActionScript",
//       "AppleScript",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
//     $("#tags").autocomplete({
//       source: availableTags
//     });
//   } );


// function getNames() {
//   database.ref().child('users').on('value', snap => {

//     USER_NAMES_IDS_DICT = {};
//     userNames = [];

//     const users = snap.val();
//     for (const [key, value] of Object.entries(users)) {
//       USER_NAMES_IDS_DICT[value.name] = key;
//       userNames.push(value.name);
//     }

//     autocomplete(document.getElementById("chat-user-names-input"), userNames);

//   })
// }

// getNames();

function getAllUsers() {
  database.ref().child('users').on('value', function (snap) {

    ALL_USERS_DICT = {};
    var userNames = [];

    window.typingUserDivComponent.updateTypingText('');
    $('#typing-user-div').removeClass('visible');
    $('#typing-user-div').addClass('invisible');

    var users = snap.val();
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = Object.entries(users)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _ref9 = _step5.value;

        var _ref10 = _slicedToArray(_ref9, 2);

        var key = _ref10[0];
        var value = _ref10[1];

        ALL_USERS_DICT[key] = {
          name: value.name,
          email: value.email,
          isActive: value.is_active,
          isTyping: value.is_typing
        };
        userNames.push(value.name);
        //key != USER.id &&
        if (key != USER.id && value.is_typing == CHAT_ID && value.is_typing != '') {
          window.typingUserDivComponent.updateTypingText(value.name + ' is typing...');
          $('#typing-user-div').removeClass('invisible');
          $('#typing-user-div').addClass('visible');
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    autocomplete(document.getElementById("chat-user-names-input"), userNames);
  });
}

getAllUsers();

$("#chat-add-user-name-button").click(function () {

  var userName = $("#chat-user-names-input").val();
  console.log(CHAT_USER_NAMES);
  console.log(userName);
  var userId = getKeyByValue(ALL_USERS_DICT, userName);
  if (userId != null && userId != undefined && !CHAT_USER_NAMES.includes(userName)) {
    CHAT_USER_NAMES.push(userName);
    window.usersDivComponent.updateUserNamesState();
    $("#chat-user-names-input").val('');
  }
});

// writeUserData(0, 'Joe Stapelton', 'joey');

// function readMessagesData() {
//   var usersRef = firebase.database().ref('messages/');
//   usersRef.on('value', function(snapshot) {
//     messages = snapshot.val();
//     console.log('1');
//     console.log(messages);
//   });
// }

// console.log('2');
// readMessagesData();

// $(".main-title-labels-div").hover(
//   function() {
//     $(".main-title-bottom-labels-div").addClass("main-title-bottom-labels-div-hover");
//   }, function() {
//     $(".main-title-bottom-labels-div").removeClass("main-title-bottom-labels-div-hover");
//   }
// );

// $(window).scroll(function(){
//   $(".main-title-scroll-label").css("opacity", 1 - $(window).scrollTop() / 100);
//   $(".main-title-labels-div").css("opacity", 1 - $(window).scrollTop() / (window.innerHeight / 2));
// });


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
        b,
        i,
        val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/

      // if (val.length <= 1) {
      //   return;
      // }

      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
// var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// /*initiate the autocomplete function on the "chat-user-names-input" element, and pass along the countries array as possible autocomplete values:*/
// autocomplete(document.getElementById("chat-user-names-input"), countries);


// $(function() {
//   // Initializes and creates emoji set from sprite sheet
//   window.emojiPicker = new EmojiPicker({
//     emojiable_selector: '[data-emojiable=true]',
//     assetsPath: 'lib/img/',
//     popupButtonClasses: 'fa fa-smile-o'
//   });
//   // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
//   // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
//   // It can be called as many times as necessary; previously converted input fields will not be converted again
//   window.emojiPicker.discover();
// });


window.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('#emoji-button');
  // const picker = new EmojiButton();

  var picker = new EmojiButton({

    // position of the emoji picker. Available positions:
    // auto-start, auto-end, top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end
    position: 'auto',

    // 1.0, 2.0, 3,0, 4.0, 5.0, 11.0, 12.0, 12.1
    emojiVersion: '12.1',

    // root element
    rootElement: document.body,

    // auto close the emoji picker after selection
    autoHide: false,

    // auto move focus to search field or not
    autoFocusSearch: true,

    // show the emoji preview
    showPreview: true,

    // show the emoji search input
    showSearch: true,

    // show recent emoji
    showRecents: true,

    // show skin tone variants
    showVariants: true,

    // 'native' or 'twemoji'
    style: 'native',

    // 'light', 'dark', or 'auto'
    theme: 'light',

    // maximum number of recent emojis to save
    recentsCount: 50,

    // z-index property
    zIndex: 999,

    // an array of the categories to show
    categories: ['smileys', 'people', 'animals', 'food', 'activities', 'travel', 'objects', 'symbols', 'flags'],

    // i18n
    i18n: {
      search: 'Search',
      categories: {
        recents: 'Recently Used',
        smileys: 'Smileys & People',
        animals: 'Animals & Nature',
        food: 'Food & Drink',
        activities: 'Activities',
        travel: 'Travel & Places',
        objects: 'Objects',
        symbols: 'Symbols',
        flags: 'Flags'
      },
      notFound: 'No emojis found'
    }

  });

  picker.on('emoji', function (emoji) {
    document.querySelector('#message-text-text-area').value += emoji;
  });

  button.addEventListener('click', function () {
    picker.togglePicker(button);
  });

  // picker.on('emoji', emoji => {
  //   document.querySelector('#message-text-text-area').value += emoji;
  // });

  // button.addEventListener('click', () => {
  //   picker.pickerVisible ? picker.hidePicker() : picker.showPicker(button);
  // });
});