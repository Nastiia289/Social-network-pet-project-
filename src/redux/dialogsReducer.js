const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

// const dialogsReducer = (state, action) => {
//     if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         state.dialogsPage.newMessageBody = action.newMessageBody;
//     } else if (action === SEND_MESSAGE) {
//         let body = state.newMessageBody;
//         // let newMessage = {
//         //   id: 6,
//         //   message: this._state.dialogsPage.newMessageBody,
//         // };
//         // this._state.dialogsPage.messagesData.push(newMessage);
//         state.dialogsPage.newMessageBody = '';
//         state.dialogsPage.messagesData.push({ id: 6, message: body })
//         console.log('added message')
//     }
//     return state;
// }
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            };
            state.messagesData.push(newMessage);
            state.newPostText = '';
            console.log('added')
            return state;
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.newMessage;
            console.log(action.newMessage)
            return state;
        }
        default:
            return state;
    }
}

export default dialogsReducer;