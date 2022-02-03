import Categories from './Categories'
import Container from "@material-ui/core/Container"

function Main() {
  return (
    <Container 
      align="center" 
      component="main" 
      maxWidth="md"
    >
      <Categories/>
    </Container>
  );
}

export default Main;
