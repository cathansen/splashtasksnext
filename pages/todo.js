import {useAuth} from 'libs/hooks/useAuth'
import { AppBar } from "components/appbar";
import {Title} from "ui/title"


function ToDoPage(props) {
   const user = useAuth()
   
    if(!user){
      return  (<>
        <AppBar />
        <Title> Please Go Away! - Maybe take a bath while your at it...</Title>
      </>)
    }

    return(
      <>
      <AppBar />
      <Title> Render the users to LIST</Title>
      </>
    )
  
}

export default ToDoPage;
