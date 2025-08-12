import TodoList from "./compoments/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";

function App() {
    return (
      <>
      <h3>Danh sach can lam </h3>
      <Textfield 
      name='add-todo'
      placeholder='Them viec can lam...'
      elemAfterInput={
        <Button isDisabled={true} appearance='primary'> Them</Button>
      }
      css= {{ padding: "2px 4px 2px"}}
      ></Textfield>
      <TodoList/>
      </>
    );
}

export default App;
