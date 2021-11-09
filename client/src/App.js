import "./App.css";
import { Button, Input, Label, Form} from "reactstrap";
import React ,{ useState } from "react";

function App() {

const [values, setValues]= useState();

const handleChangeValues = (value) =>{
    setValues((prevValue)=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  const handleclickbutton =()=>{
    console.log(values)
  }
  
  return (
    <div >
      <h1>Gerador de Times</h1>
      <Form>
        <div className="form-group">
        <Label for="formGroupExampleInput">
          Insira o nome do Jogador: <br />
        </Label>
        <Input 
        onChange={handleChangeValues}
        type="text" 
        name="name" 
        placeholder="nome" />
        </div>
        <Button 
        color="primary"
        onClick={()=>handleclickbutton( )}
        > 
        Cadastrar Jogador
        </Button>
        
      </Form>
    </div>
  );
}

export default App;
