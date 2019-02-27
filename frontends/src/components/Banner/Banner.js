import React from 'react'
import { Button, Card, Image, Embed } from 'semantic-ui-react'

const EmbedExampleYouTube = () => (
  <Embed id='f832ih2ZEro' placeholder='https://i.ytimg.com/an_webp/f832ih2ZEro/mqdefault_6s.webp?du=3000&sqp=COqk2uAF&rs=AOn4CLDtjRLar9zpDfsvGkNFpXxnNnWtxw'  aspectRatio='4:3' source='youtube' />
)


const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
       <EmbedExampleYouTube />
      </Card.Content>
      <Card.Content extra>
        <Card.Header>Header</Card.Header>
        <Card.Description>Description</Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
       <EmbedExampleYouTube />
      </Card.Content>
      <Card.Content extra>
        <Card.Header>Header</Card.Header>
        <Card.Description>Description</Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
       <EmbedExampleYouTube />
      </Card.Content>
      <Card.Content extra>
        <Card.Header>Header</Card.Header>
        <Card.Description>Description</Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups