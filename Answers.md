1. What problem does the context API help solve?

    With context API, your able to get data and pass data around without having to worry about setting up different state. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    reducers is where all the logic occurs (switch cases) and actions is where you make an action by dispatching the reducers, for example 'FETCH_DATA'. & with the store, it keeps all the action and reducers so you can use it anywhere you like. I think the store is known as a 'single source of truth' because the data flow is going all around. If one thing updates from the state, everwhere else should also update.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Smaller apps can use component state whereas big apps would work best with application state. with state component, a store component may not be accessible from another component.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    its a middleware which lets the programmer call action creators that lets us be able to return a function instead of using a action object.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    personally, I liked redux a lot more even though it took me longer to understand and learn; however, context api is a lot easier. I don't think I really have a preference :)