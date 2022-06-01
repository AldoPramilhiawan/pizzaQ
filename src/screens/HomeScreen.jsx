import React, { useEffect } from "react";
import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <h1>Loading ...</h1>
        ) : error ? (
          <h1>Error while fetching pizzas</h1>
        ) : (
          <Row>
            {AllPizza.map((pizza) => (
              <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
