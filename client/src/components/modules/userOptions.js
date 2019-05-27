import React from 'react'
import {Dropdown, Icon} from "semantic-ui-react";


export  default () => (
    <span>
        Loged-in as <i>administrator</i> {' '}
        <Dropdown text={"Dylan Hoogduin"} inline   pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Header>Options</Dropdown.Header>
                <Dropdown.Item><Icon name={'cogs'}/>Settings</Dropdown.Item>
                <Dropdown.Item><Icon name={'edit'}/>Edit account</Dropdown.Item>
                <Dropdown.Divider />
                  <Dropdown.Header><i className={'user-role-menu'}>Admin</i></Dropdown.Header>
                <Dropdown.Item><Icon name={'log out'}/>Log-out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </span>
);