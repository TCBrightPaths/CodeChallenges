//Write a function that returns an object
//Return a count of food options
//The options come from an array of food choices that the developers chose from the meetup signup

let potLuck = {
    sam: 'pho',
    michael: 'soup',
    diana: 'pinapple-turnover',
    franklin: 'chili',
    timothy: 'chips',
    dylan: 'sandwiches',
    toni: 'beer',
    sandra: 'salad'
}

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    console.log(length);
};

ObjectLength(potLuck);

// let mealCount = () => console.log(potLuck.data)

// mealCount();