import SiteLayout from './components/Layout';
import Login from './pages/Login';

const App = () => (
  <>
    <SiteLayout
      header={<span>Тут будет название проекта</span>}
      content={<Login />}
      footer={<span>(c) Starter</span>}
    />
    
  </>
)

export default App
