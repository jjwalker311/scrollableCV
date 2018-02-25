//internal variables
const heightOffGround = 90,
      xSpriteStep = 108,
      ySpriteStep = 142;
     
export const constantValues = {
    moveMS : 100,
    actionMinimumTime : 80,
    spriteImages : 7,
    scenes : {
        'welcomeScene' : {
            left : 0
        }
    }
};

//Creating nested array for all possible sprite values
export let spriteActions = [[],[]];
for (let i=0; i < (constantValues.spriteImages+1); i++){
    spriteActions[0].push(
        {x : `${-i*xSpriteStep}px`, y : 0},
    );

    spriteActions[1].push(
        {x : `${-i*xSpriteStep}px`, y : `${ySpriteStep}px`},
    );
}

//Initial state of the store
export const initialStoreState = {
    'me' : {
        //0-right, 1-left
        direction : 0,

        //Rotates 0 -   > 7  > then back to 0 
        motion : 0,

        bottom : heightOffGround,

        jump : false
    }
}

