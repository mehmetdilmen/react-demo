import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input, Alert, Container, Row, Col} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';

export default class New extends Component {
	state = {question:'', choice: '', successMsg: false}

	onChangeHandler = (event)=>{
		let name = event.target.name;
		let value = event.target.value;
		this.setState({[name]:value})
	}

	handleChangeMultiSelection = (event) => {
	  let value = Array.from(event.target.selectedOptions, option => option.value);
	  this.setState({choice: value});
	}


	onSubmitHandler = (event)=> {
		this.setState({successMsg: true});
		event.preventDefault();
		const sendData = {"question": this.state.question, "choices": this.state.choice}
		fetch("https://polls.apiblueprint.org/questions?", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // eslint-disable-next-line no-undef
            body: JSON.stringify(sendData)
        }).then(function (res) {
            return res, res.json()
        }).then(function (data) {
          		console.log(data);          
            }).catch(function (err) {
            console.log(err)
        })

	}

	
	render() {
		return (
				<div>    
				<Header/>
				<Container>
      				<Row md="2">
					<Col>
					<Form onSubmit={this.onSubmitHandler}>
					   <FormGroup>
						<Label for="question">Question</Label>
						<Input
							name="question"
							type="text"
							placeholder="Enter question" 
							onChange={this.onChangeHandler}
							/>
						</FormGroup>


					   <FormGroup>
						<Label for="choice">Question</Label>
						<Input
							name="choice"
							id="choice"
							type="select"
							multiple
							onChange={this.handleChangeMultiSelection}
							>
							<option>a</option>
							<option>b</option>

							</Input>
						</FormGroup>
						
						<Button type="submit">Send</Button>
					</Form>
				      
					{ 
						this.state.successMsg  === true &&
						<div>
				      <Alert color="success">
				        Question is Added !
				      </Alert>
				      </div>
				      }
				      </Col>
			      </Row>
			    </Container>				      
				</div>
			)
	}
}