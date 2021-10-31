import { Layout } from './components/Layout';
import { MenuContent } from './components/MenuContent';
import { RegistionForm } from './components/RegistionForm';

function App() {
  return (
    <div className="App">
      <Layout>
        <MenuContent />
        <RegistionForm />
      </Layout>
    </div>
  );
}

export default App;
