
const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

const next = {
    type: 'NEXT',
};

const previous = {
    type: 'PREVIOUS',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NEXT':
        return {
          ...state,
          index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
        };

        case 'PREVIOUS':
        return {
          ...state,
          index: state.index === 0 ? 0 : state.index - 1,
        };

        default: 
        return state;
    }
}

const store = Redux.createStore(reducer);

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
    store.dispatch(next);
})


const previousBtn = document.getElementById('previous');
previousBtn.addEventListener('click', () => {
    store.dispatch(previous);
})

store.subscribe(() => {
    const { colors, index} = store.getState();
    const body = document.getElementById('container');
    const text = document.getElementById('value');
    body.style.backgroundColor = colors[index];
    text.innerText = colors[index];
})
