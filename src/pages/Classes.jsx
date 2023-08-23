import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import YearbookCard from "../components/YearbookCard"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"

const Classes = () => {
  const { user } = useContext(UserContext)
  const { isAdmin, isLoggedIn } = user

  const nav = useNavigate()
  const classes = [1, 2, 3, 4, 5]
  return (
    <Container fluid="md" className="text-md-center mt-4">
      <Row>
        <Col>
          <h1>School Name</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="">All yearbooks</h2>
        </Col>
      </Row>
      <Row>
        {classes.map((a) => (
          <Col key={a} md="auto" className="m-2">
            <YearbookCard />
          </Col>
        ))}
      </Row>
      <Row>
        <Col />
        <Col md="auto">
          <Button onClick={() => nav("/account")}>Back</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Classes
