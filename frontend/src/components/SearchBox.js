import React, { useState } from 'react'
import { Form, Button, Row,Col } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form inline onSubmit={submitHandler} >
            <Row>
                <Col md={8}>
                    <Form.Control
                        type='text'
                        name='q'
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder='Search Products...'
                        className='mr-sm-2 ml-sm-5'
                    />
                </Col>
                <Col md={4}>
                    <Button type='submit' variant='outline-success' className='p-2'>
                        Search
                    </Button>
                </Col>
            </Row>

        </Form>
    )
}

export default SearchBox