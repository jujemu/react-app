import logo from './logo.svg';
import './App.css';

function Header(props){
  return <header>
  <h1><a href='/'>{props.title}</a></h1>
</header>
} 

function Nav(props){
  return <nav>
  <ol>
    {props.topics}
  </ol>
</nav>
}

function Article(){
  return <article>
  <h2>Welcome</h2>
  Hello, WEB
</article>
}

function App() {
  const topics = [
    {id: 1, title:'html', body:'html is ...'},
    {id: 2, title:'css', body:'css is ...'},
    {id: 3, title:'js', body:'js is ...'},
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
