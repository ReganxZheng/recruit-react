import { Layout } from './components/Layout';
import { MenuContent } from './components/MenuContent';
import { RegistionForm } from './components/RegistionForm';
import { FormikValues } from './components/RegistionForm/types';

function App() {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <div className="App">
      <Layout>
        <MenuContent />
        <RegistionForm onSubmit={onSubmit} />
      </Layout>
    </div>
  );
}

export default App;
