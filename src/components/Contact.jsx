import React from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import {FiPhoneCall} from "react-icons/fi";
import {ImMobile} from "react-icons/im";
import {AiOutlineMail} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>PizzaQ</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsa! Minima unde doloremque fugit aliquam, accusantium incidunt impedit, ex nisi, ratione id adipisci dignissimos quo nulla perspiciatis quasi ipsum odio itaque
              harum sunt reprehenderit odit suscipit dolor error? Fuga unde eum fugit impedit repellat eaque aperiam ex nam quis illum error, sit, culpa nesciunt corrupti aliquam ut dolore saepe dolorum rerum doloremque beatae labore.
              Minima quam sed labore dolore officiis! Maxime eaque, quaerat quae possimus quam itaque officia corrupti minima perspiciatis voluptatum, ipsa quas odio accusamus quasi rem animi necessitatibus asperiores, nulla numquam enim ex
              nemo voluptate veritatis! Officiis quidem fugiat nobis reiciendis aspernatur! Corrupti, quasi doloribus. Soluta nisi veritatis nihil. Distinctio, asperiores quas reprehenderit temporibus delectus expedita ratione inventore
              suscipit eaque assumenda similique, magnam fuga minus unde fugit? Minima nam ipsum necessitatibus veniam eos autem quisquam fugit. Veniam, hic laudantium totam aliquid non cumque unde aspernatur molestiae itaque sunt nihil
              delectus error enim, dolores amet rem, deleniti nulla! Sint quaerat id temporibus voluptas fugiat doloribus iusto ipsa maiores cupiditate eos ut debitis laudantium magni, error laboriosam tempore, tempora commodi adipisci!
              Consequatur, dignissimos quia consequuntur repellendus error repellat aperiam tenetur quas nisi dolores. Deserunt aspernatur reiciendis ea ut totam deleniti.
            </p>
            <Table striped bordered hover className="text-center ">
              <thead>
               <tr>
                   <th className="bg-warning text-center" colSpan={5}>
                     --- Contact Details ---
                   </th>
               </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FiPhoneCall /></td>
                  <td>Phone</td>
                  <td>0857-4724-2382</td>
                </tr>
                <tr>
                  <td><ImMobile /></td>
                  <td>Call</td>
                  <td>0821-3567-9692</td>
                </tr>
                <tr>
                  <td><AiOutlineMail /></td>
                  <td>Email</td>
                  <td>aldopramilhiawan0@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
              <Image src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%"}}
              />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
