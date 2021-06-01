import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from "./components/Message";
import  Counter from "./components/Counter";
import FunctionClick from './components/FunctionClick';
import ParanentComp from './components/ParanentComp';
import  ChildComp from "./components/ChildComp";
import  UseGreeting  from "./components/UseGreeting";
import RenderList from "./components/RenderList";
import InlineStyle from "./components/InlineStyle";
import Form from "./components/Form";
import RefsDemo from "./components/RefsDemo";
import FocusRef from "./components/FocusRef";
import ForwdParentRef from "./components/ForwdParentRef";
import ClickCounter from "./components/ClickCounter";
import OnMouseCounter from "./components/OnMouseCounter";
import UserRenderProps from "./components/UserRenderProps";
import CounterProp from "./components/CounterProp";
import OnHoverProps from "./components/OnHoverProps";
import OnClickProps from "./components/OnClickProps";
import ArticleList from "./components/HTTPRequest/ArticleList";
import CreateArticle from "./components/HTTPRequest/CreateArticle";
import DeleteArticle from "./components/HTTPRequest/DeleteArticle";
function App() {
  return (
    <div className="App">
    {
      /*
    <Welcome name="Philius" position="Project Manager"></Welcome>
     <Greet name="Edison" position="Software Developer"></Greet>
     <Message></Message>
     <Counter></Counter>
     <FunctionClick></FunctionClick>
     <ParanentComp></ParanentComp>
    < UseGreeting ></UseGreeting>
    <RenderList></RenderList>
    <InlineStyle></InlineStyle>
    < Form></Form>
      <RefsDemo></RefsDemo> 
    <FocusRef></FocusRef>
    <ForwdParentRef></ForwdParentRef>
    <MyPortal></MyPortal>
    // HOC
    <ClickCounter />
    <OnMouseCounter />

    // Render Props
     <CounterProp render={(count,IncrementsCount)=> <OnHoverProps count={count} IncrementsCount={IncrementsCount} />} />
    <CounterProp render={(count,IncrementsCount)=> <OnClickProps count={count} IncrementsCount={IncrementsCount} />} />
  
    <UserRenderProps name={(isLoggedIn) =>isLoggedIn ? 'Edison' : 'Guest'} />
   
    
    <ArticleList />
    < Form></Form>
    <CreateArticle />
      */
    
    }
  
    <DeleteArticle />
    </div>
  );
}

export default App;
