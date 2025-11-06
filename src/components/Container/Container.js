import { useLayout } from '../../context/LayoutContext'
import Footer from '../Footer'
import Header from '../Header'
import { ContainerBlocks, ContainerLayouts } from './ContainerLayoutConfig'

const Container = () => {
  const { activeLayout } = useLayout();
  const config = ContainerLayouts[activeLayout] || ContainerLayouts.layout1;
  console.log('Container rendered', activeLayout);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div style={{ display: 'flex', flex: 1 , flexDirection: activeLayout === 'layout3' ? 'column' : ''}}>
          {config.components.map((key, i) => {
            const Comp = ContainerBlocks[key];
            return <Comp key={i} />;
          })}
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default Container