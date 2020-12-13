import React, { useState, useEffect } from "react";
import Header from '../../Components/Header';
import { useRouter } from 'next/router';
import {Card, CardHeader, CardBody, CardFooter, CardTitle, CardText, Container, Row, Col} from "reactstrap"
import Moment from 'moment';



function Question() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({choices: []});
	const router = useRouter()
	const { pid } = router.query


	useEffect(() => {
		fetch(`https://polls.apiblueprint.org/questions/${pid}`).then(response => response.json()).then(data => {
			setData(data)
		});
	}, []);


	return (
		<div>
		<Header/>

		<Container>
		  <Row md="2">
			<Col>		
		      <Card>
		        <CardHeader>{data.question}</CardHeader>
		        <CardBody>
		       
			      {data.choices.map(item => (
			        <div>Option: {item.choice}</div>
			      ))}

		        </CardBody>
		        <CardFooter>{Moment(data.published_at).format('YYYY-MM-DD')}</CardFooter>
		      </Card>
		      </Col>
		  </Row>
		</Container>	      
		</div>
	)


} 


export default Question