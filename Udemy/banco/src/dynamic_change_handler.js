changeHandler = event => {

     const name = event.target.name;
     const value = event.target.value;

     this.setState({
         formControls: {
           [name]: value
         }
     });

 }
