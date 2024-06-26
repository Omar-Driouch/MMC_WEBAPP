import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addEventParticipant, addParticipant } from "../../features/citySlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const RegistrationContainer = styled.div`
  padding: 120px 0;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const Content = styled.div`
  max-width: 800px;
  margin: 1rem auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
const Form = styled.form`
  padding: 20px;
  width: 100%;
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;
const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  transition: 0.3s ease;
  &::placeholder {
    font-size: 14px;
    font-weight: 300;
    color: #999;
  }
  &:focus {
    border: 1px solid #ffb703;
    outline: 3px solid #ffb80347;
  }
`;
const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  &:focus {
    border: 1px solid #ffb703;
    outline: 3px solid #ffb80347;
  }
`;
const SaveButton = styled.button`
  padding: 12px 35px;
  font-size: 16px;
  background-color: #ffb703;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SuccessAlertContainer = styled.div`
  width: 400px;
  height: 350px;
  border: 1px solid #ccc;
  position: absolute;
  transition: 0.7s ease;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.var ? "translate(-50%,-300%)" : "translate(-50%,-50%)"};
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const Registration = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    // id:"2f572af0-703d-47ed-5e81-08dc52698209"
  });
  const { eventId } = useParams();
  const dispatch = useDispatch();
  // const participantId = useSelector(state=>state.city.participantId);
  useEffect(() => {
    window.scroll(0, 0);
    // dispatch(fetchEventById(parseInt(eventId)));
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    window.scroll(0, 0);
    e.preventDefault();
    dispatch(addParticipant(data)).then((result) => {
      console.log(result.payload);
      dispatch(
        addEventParticipant({
          id_Participant: result.payload,
          id_Event: eventId,
        })
      ).then((res) => {
        setShow(false);
      });
    });
  };

  return (
    <RegistrationContainer>
      {show && (
        <Content>
          <Form onSubmit={handleSubmit}>
            <Heading>Registration Form</Heading>
            <FormGroup class="form-group">
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <FormInput
                onChange={handleChange}
                placeholder="enter your first name"
                type="text"
                name="firstName"
              />
            </FormGroup>
            <FormGroup class="form-group">
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <FormInput
                onChange={handleChange}
                placeholder="enter your last name"
                type="text"
                name="lastName"
              />
            </FormGroup>
            <FormGroup class="form-group">
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                onChange={handleChange}
                placeholder="enter your email"
                type="email"
                name="email"
              />
            </FormGroup>
            <FormGroup class="form-group">
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormInput
                onChange={handleChange}
                placeholder="enter your phone"
                type="text"
                name="phone"
              />
            </FormGroup>
            <FormGroup class="form-group">
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <FormSelect name="gender" value="" onChange={handleChange}>
                <option value="Chose gender" selected>
                  Chose gender
                </option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </FormSelect>
            </FormGroup>
            <FormGroup class="form-group">
              <FormLabel htmlFor="City">City</FormLabel>
              <FormInput
                onChange={handleChange}
                placeholder="enter your city"
                type="text"
                name="city"
              />
            </FormGroup>
            <FormGroup class="form-group">
              <SaveButton type="submit">Save</SaveButton>
            </FormGroup>
          </Form>
        </Content>
      )}
      <SuccessAlertContainer var={show}>
        <CheckCircleIcon style={{ color: "green", fontSize: "120px" }} />
        <h1 style={{ fontSize: "30px", fontWeight: "500" }}>Success</h1>
        <p>Registration Completed Successfully !</p>
        <Link to="/">
          <SaveButton>Back</SaveButton>
        </Link>
      </SuccessAlertContainer>
    </RegistrationContainer>
  );
};

export default Registration;
