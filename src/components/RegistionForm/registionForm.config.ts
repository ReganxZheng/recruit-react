import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  creditCard: Yup.string().min(16, 'Credit Card is invaild').required('Credit Card is required'),
  cvcNumber: Yup.string().min(3, 'CVC number is invaild').required('CVC number is required'),
  expireDate: Yup.string().min(4, 'Expire date is invaild').required('Expire date is required'),
});
