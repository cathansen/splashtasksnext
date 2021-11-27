import {useAuth} from 'libs/hooks/useAuth'
import { AppBar } from "components/appbar";
import {Title} from "ui/title"


function ToDoPage(props) {
   const user = useAuth()
    if(!user){
      <>
        <AppBar />
        <Title> Please Go Away - Maybe take a bath...</Title>
      </>
    }

    return(
      <>
      <AppBar />
      <Title> Render the suers to LIST</Title>
      </>
    )
  
}

export default ToDoPage;
