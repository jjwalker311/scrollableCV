import {initialStoreState, constantValues} from '../constants';

const me = (state = initialStoreState.me, action) => {

    if (!action.event){
        return state;
    }

    /**
     * Updates stage of motion
     */
    const updateMotion = () => {

        const goingRight = (state.direction === 0);

        if ((!!goingRight && (state.motion < constantValues.spriteImages)) || (!goingRight && (state.motion > 0))){
            //Not at the end of the line, yet...
            return state.motion + (goingRight ? 1 : -1);
        } else {
            //End of the line, go home you're drunk
            return (goingRight ? 0 : 7);
        } 
    }

    const updatePlayer = (direction) => {
        return {
            ...state,
            direction : direction,
            motion : updateMotion()
        }
    },

    triggerJump = () => {
        let updatedState = {...state};
        if (!state.jump){
            //we're not already jumping
            updatedState = {...updatedState, 'jump' : true}
        }

        return updatedState;
    },

    initialiseJump = () => {
        return {
            ...state,
            jump : false
        }
    }

    switch (action.event.code){

        case 'ArrowDown':
            return updatePlayer(0);

        case 'ArrowUp':
            return updatePlayer(1);

        case 'Space':
            return triggerJump(); 
           
        case 'InitialiseJump':
            return initialiseJump();    

        default:
            return state
    }
}
export default me;