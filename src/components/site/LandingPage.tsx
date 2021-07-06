import React, {Component} from 'react';

type LandingPageState={

}

type AcceptedProps ={
    clearToken():void,
    token:string,
    role: string

    }

class LandingPage extends Component <AcceptedProps, LandingPageState>{
    constructor(props:AcceptedProps){
        super(props);
            
        
    }


render(){
    return (
        <div>

            <h1>You have landed!</h1>
        </div>
    );
    }
}


export default LandingPage;