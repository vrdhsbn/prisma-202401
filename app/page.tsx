import { Suspense } from 'react'
import { Edit } from './components/view/Edit'
import { Table } from './components/view/Table'
import './styles/styles.scss'

const Home = () => {
  return (
    <div>
      <div style={{ padding: '24px' }}>
        <Edit />
      </div>
      <div
        style={{
          marginTop: '100px',
          borderTop: 'solid 1px #ccc',
          padding: '24px',
        }}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Table />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
