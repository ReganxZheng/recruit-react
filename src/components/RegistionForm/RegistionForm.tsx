import { Formik, Form, Field } from 'formik';
import { Row, Col } from 'antd';
import { useContext } from 'react';

import { FieldInputProps, RegistionFormProps } from './types';
import { MenuToggleContext } from '../../store/context';
import { NumberFormatInput } from '../NumberFormatInput';
import { NumberFormatValues } from 'react-number-format';
import { RegistionFormWrapper, StyledErrorMessage, SubmitButton, WelcomeWrapper } from './RegistionForm.styled';
import { cardExpiry } from './registionForm.utils';
import { validationSchema } from './registionForm.config';

const CreditCardInput = ({ onChange }: FieldInputProps) => (
  <NumberFormatInput
    data-testid="test-creditcard"
    aria-label="Credit Card"
    label="Credit Card"
    placeholder="Credit Card Number"
    format="#### #### #### ####"
    mask="_"
    onValueChange={(values: NumberFormatValues) => {
      onChange(values.value);
    }}
  />
);

const CVCNumberInput = ({ onChange }: FieldInputProps) => (
  <NumberFormatInput
    data-testid="test-cvcnumber"
    aria-label="CVC"
    label="CVC"
    placeholder="CVC"
    maxLength={3}
    onValueChange={(values: NumberFormatValues) => {
      onChange(values.value);
    }}
  />
);

const ExpireDateInput = ({ onChange }: FieldInputProps) => (
  <NumberFormatInput
    data-testid="test-expiredate"
    aria-label="Expire Date"
    label="Expire Date"
    placeholder="MM/YY"
    format={cardExpiry}
    onValueChange={(values: NumberFormatValues) => {
      onChange(values.value);
    }}
  />
);

export const RegistionForm = ({ onSubmit }: RegistionFormProps) => {
  const { state } = useContext(MenuToggleContext);

  const handleSubmit = async (values: any) => {
    setTimeout(() => {
      onSubmit(values);
    }, 500);
  };

  const initialValues = {
    creditCard: '',
    cvcNumber: '',
    expireDate: '',
  };

  return (
    <RegistionFormWrapper shouldDisplay={state.menuToggled}>
      <WelcomeWrapper data-testid="test-welcome">Welcome</WelcomeWrapper>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form data-testid="test-form">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Field
                  component={CreditCardInput}
                  name="creditCard"
                  onChange={(value: string) => setFieldValue('creditCard', value)}
                />
                <StyledErrorMessage name="creditCard" component="div" />
              </Col>
              <Col span={24}>
                <Row justify="end" gutter={[16, 16]}>
                  <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                    <Field
                      name="cvcNumber"
                      component={CVCNumberInput}
                      onChange={(value: string) => setFieldValue('cvcNumber', value)}
                    />
                    <StyledErrorMessage name="cvcNumber" component="div" />
                  </Col>
                  <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                    <Field
                      name="expireDate"
                      component={ExpireDateInput}
                      onChange={(value: string) => setFieldValue('expireDate', value)}
                    />
                    <StyledErrorMessage name="expireDate" component="div" />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <SubmitButton type="submit" data-testid="submit">
                  Submit
                </SubmitButton>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </RegistionFormWrapper>
  );
};
