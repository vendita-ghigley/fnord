import React from 'react'
import styled from 'styled-components'
import './App.scss'

const Center = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const App = () => (
    <Center>
        <div id='hello'>Hello World!</div>
    </Center>
)

export default App