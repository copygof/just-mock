import React, { Component } from 'react'
import { Header, Segment, Menu, Input, Grid } from 'semantic-ui-react'


class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Header as='h2' floated='left' style={{ marginTop: 15, marginRight: 30 }}>
          DJ-PAO Remix
        </Menu.Header>
        <Menu.Item
          name='หน้าหลัก'
          active={activeItem === 'หน้าหลัก'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='แพงใหม่ล่าสุด'
          active={activeItem === 'แพงใหม่ล่าสุด'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='ติดต่องาน'
          active={activeItem === 'ติดต่องาน'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

const HeaderExampleFloating = () => (
  <Segment clearing>
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <MenuExampleSecondary />
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
  </Segment>
)

export default HeaderExampleFloating