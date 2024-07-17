import { Container } from './style'

export function Page2 () {
    console.log('teste')
    return (
        <Container>
            <h1>Esta é a página 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto voluptatibus, numquam minima ratione expedita sequi aspernatur totam harum nihil laudantium, provident perspiciatis iste quo! Recusandae illo repellendus magni atque quia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate, fugiat voluptatem id nisi omnis doloremque nam ab quasi mollitia provident, commodi dolore optio exercitationem cum, enim ipsa vero molestias.</p>
            <a href="/page3">Mudar</a>
        </Container>
    )
}