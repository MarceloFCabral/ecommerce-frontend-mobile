import React from 'react';
import Button from '../ui/Button';
import Container from '../views/Container';
import Text from '../ui/Text';
import TextInput from '../ui/TextInput';
import VFlexContainer from '../views/VFlexContainer';

const InitialScreen: React.FC = () => (
  <Container>
    <VFlexContainer width="60%" height="100%">
      <Text type="large" color="primary">
        Violet e-Shop
      </Text>
      <VFlexContainer width="100%" height="20%">
        <TextInput
          width="140%"
          height="30%"
          multiline={false}
          placeholder="Username"
        />
        <TextInput
          width="140%"
          height="30%"
          multiline={false}
          placeholder="Password"
        />
      </VFlexContainer>
      <VFlexContainer width="100%" height="20%">
        <Button text="Login" />
        <Button text="Register" />
      </VFlexContainer>
    </VFlexContainer>
  </Container>
);

export default InitialScreen;
