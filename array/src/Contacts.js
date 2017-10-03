import React from 'react';

class Contacts extends React.Component{
    constructor(){
        super();
        this.state={
            contactData : [
                {name : 'aa' , phone : '010-0000-0001'},
                {name : 'bb' , phone : '010-0000-0002'},
                {name : 'cc' , phone : '010-0000-0003'},
                {name : 'dd' , phone : '010-0000-0004'},
            ]
        };
    };
    render(){
        const ContactData = this.state.contactData.map((value,index)=>{
            return <li key={index}>{value.name} : {value.phone}</li>
        });
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {ContactData}
                </ul>
            </div>
        );
    };
};

export default Contacts;